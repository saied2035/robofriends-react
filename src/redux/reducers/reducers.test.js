import {
		CHANGE_SEARCH_BAR,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED
	} from '../constants';

import * as reducers from './reducers'

describe('search robots',() => {
	const initialStateSearch = {
	   filterRobots :  []
    }
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

	it("default case searchRobots", () => {
		expect(reducers.searchRobots(initialStateSearch,{})).toEqual({filterRobots:[]})
	})

	it('get all robots', () => {
	    expect(reducers.searchRobots(initialStateSearch,{
	     	type: REQUEST_ROBOTS_SUCCESS,
	     	payload : robots.filter(robot => robot.name.toLowerCase().includes("".toLowerCase()))
	    })).toEqual({filterRobots:robots})				    
	})

	it('filters the robots', () => {
	    expect(reducers.searchRobots(initialStateSearch,{
	     	type: CHANGE_SEARCH_BAR,
	     	payload : robots.filter(robot => robot.name.toLowerCase().includes("1".toLowerCase()))
	    })).toEqual({filterRobots:[{id : 2,name: 'saied1',email: 'saied1@gmail.com'}]})				    
	})	

})

describe('search robots',() => {
const initialStateRobots = {
	isPending : false,
	robots : [],
	error : ''
}
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

	it("default case requestRobots", () => {
		expect(reducers.requestRobots(initialStateRobots,{}))
		.toEqual({isPending :false,robots : [],error : ''})
	})

	it('pending the robots', () => {
	    expect(reducers.requestRobots(initialStateRobots,{
	     	type: REQUEST_ROBOTS_PENDING
	    })).toEqual({isPending :true,robots : [],error : ''})				    
	})

	it('getting robots successfully', () => {
	    expect(reducers.requestRobots(initialStateRobots,{
	     	type: REQUEST_ROBOTS_SUCCESS,
	     	payload : robots
	    })).toEqual({isPending :false,robots : robots ,error : ''})				    
	})

	it('request failed', () => {
	    expect(reducers.requestRobots(initialStateRobots,{
	     	type: REQUEST_ROBOTS_FAILED,
	     	payload : 'error'
	    })).toEqual({isPending :false,robots : [] ,error : 'error'})				    
	})		

})