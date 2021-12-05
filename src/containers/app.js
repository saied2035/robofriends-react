import {memo} from 'react';
import MainPage from '../components/MainPage/MainPage';
import {connect} from 'react-redux';
import {setSearchBar,requestRobots} from '../redux/actions/actions';

 const state = (state) => {
  return {
    filterRobots :state.searchRobots.filterRobots,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending ,
    error : state.requestRobots.error
  }
 }
 const action = (action) => {
  return {
          onSearchChange: (event,robots) => action(setSearchBar(event.target.value,robots)) ,
          onRequestRobots: () => action(requestRobots())
         }
      
 }

const App=(props) => {
       return <MainPage {...props} />
}

export default connect(state,action)(memo(App));
