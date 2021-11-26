import { getData } from './api/api'
import {
	CHANGE_SEARCH_BAR ,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
}  from './constants.js';

export const setSearchBar = (text) => ({
      type : CHANGE_SEARCH_BAR ,
      payload : text
})

export const requestRobots = () => (request)  => {
	request({type: REQUEST_ROBOTS_PENDING});
	getData('https://jsonplaceholder.typicode.com/users')
      .then(data => request({type: REQUEST_ROBOTS_SUCCESS , payload: data}))
      .catch(error => request({type: REQUEST_ROBOTS_FAILED, payload: 'error'}))
}