import { getData } from '../../api/api'
import {
	CHANGE_SEARCH_BAR ,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
}  from '../constants';

export const setSearchBar = (text,robots) => ({
      type : CHANGE_SEARCH_BAR ,
      payload : robots.filter(robot => robot.name.toLowerCase().includes(text.toLowerCase()))
})

export const requestRobots = () => (request)  => {
	request({type: REQUEST_ROBOTS_PENDING});
	return getData('https://jsonplaceholder.typicode.com/users')
      .then(data => request({type: REQUEST_ROBOTS_SUCCESS , payload: data}))
      .catch(error => request({type: REQUEST_ROBOTS_FAILED, payload: 'error'}))
}