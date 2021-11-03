import React from 'react';
import  CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import {connect} from 'react-redux';
import {setSearchBar,requestRobots} from '../actions';
import './defaults.css';
import './app.css';

 const state = (state) => {
  return {
    searchBar :state.searchRobots.searchBar,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending ,
    error : state.requestRobots.error
  }
 }
 const action = (action) => {
  return {
          onSearchChange: (event) => action(setSearchBar(event.target.value)) ,
          onRequestRobots: () => action(requestRobots()) 
         }
      
 }
class  App extends React.Component {

          componentDidMount (){
              this.props.onRequestRobots();
          }

           render() {
            
            const {searchBar,onSearchChange, robots , isPending, error} = this.props;
             
           const filteredRobots= robots.filter(robot => {
         	return robot.name.toLowerCase().includes( searchBar.toLowerCase())
               });
           
             return  isPending ? 
             <div style={{height:'100vh'}}className='flex justify-center items-center'><h1>Loading</h1></div>
             :
           	  (
                <div className="tc" style={{overflow:'hidden'}} >
                <h1 className="f2 ma2">RoboFriends</h1>
                <SearchBox onSearchChange={onSearchChange}/>
                <div style={{height:'75vh',overflow:'auto'}}>
                    <CardList robots={filteredRobots} error={error}/>
                </div>    
                </div>
           	 	)
           }
}

export default connect(state,action)(App);