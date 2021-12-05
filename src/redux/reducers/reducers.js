import {
	CHANGE_SEARCH_BAR,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	} from '../constants';

const initialStateSearch = {
	filterRobots :  []
}

export const searchRobots = (state=initialStateSearch,action={}) => {
	switch (action.type) {
		case REQUEST_ROBOTS_SUCCESS :
		case CHANGE_SEARCH_BAR :
			return Object.assign({},state,{filterRobots : action.payload });
		default:
			return state;
	}
}
const initialStateRobots = {
	isPending : false,
	robots : [],
	error : ''
}
export const requestRobots = (state=initialStateRobots,action={})  => {
	switch (action.type) {
		case REQUEST_ROBOTS_PENDING :
			return Object.assign({},state,{isPending:true,robots:[],error:''});
		case REQUEST_ROBOTS_SUCCESS :
			return Object.assign({},state,{robots:action.payload,isPending:false,error:''});
		case REQUEST_ROBOTS_FAILED :
			return Object.assign({},state,{error:action.payload,isPending :false,robots:[]});
		default :
			return state;
	}
}
