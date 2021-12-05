import {
		CHANGE_SEARCH_BAR,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED
	} from '../constants';

import * as actions from './actions'

import mockStore from '../mockStore'
const robots = [
			        {
			            id : 1,
			            name: 'saied',
			            email: 'saied@gmail.com'
			        },
			        {
			            id : 2,
			            name: 'saied1',
			            email: 'saied1@gmail.com'
			        },
			        {
			            id : 3,
			            name: 'saied2',
			            email: 'saied2@gmail.com'
			        },
			        {
			            id : 4,
			            name: 'saied3',
			            email: 'saied3@gmail.com'
			        }
			   ]

it("return filtered robots",() => {
	 expect(actions.setSearchBar("1",robots))
	 .toEqual({type : CHANGE_SEARCH_BAR ,payload : [{id : 2,name: 'saied1',email: 'saied1@gmail.com'}] }) 
})

it("test REQUEST_ROBOTS_PENDING",() => {
	const store = mockStore()
	return store.dispatch(actions.requestRobots())
	const action = store.getActions()
	console.log("pending",action)
	expect(action[0]).toEqual({type: REQUEST_ROBOTS_PENDING})
})

it("test REQUEST_ROBOTS_SUCCESS",() => {
	const store = mockStore()
	return store.dispatch(actions.requestRobots())
	 .then((data) => {
	 	   const action = store.getActions()
		   expect(action[1]).toEqual({type: REQUEST_ROBOTS_SUCCESS,payload:data.payload})
	  })
	  .catch(error => expect(store.getActions()[1]).toEqual({type: REQUEST_ROBOTS_FAILED,payload:'error'}) )
})



