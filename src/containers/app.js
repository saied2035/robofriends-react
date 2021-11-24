import {useEffect} from 'react';
import  CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {setSearchBar,requestRobots} from '../actions';
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

function App(props) {
            const {onRequestRobots} = props
          useEffect(() =>{
               onRequestRobots()
          },[onRequestRobots])
          const {searchBar,onSearchChange, robots , isPending, error} = props;
          const filteredRobots= robots.filter(robot => {
          return robot.name.toLowerCase().includes( searchBar.toLowerCase())
               });
  return (
          isPending ? 
                 <div style={{height:'100vh'}}className='flex justify-center items-center'><h1>Loading</h1></div>
             :
              (
                <div className="tc">
                <Header/>
                <SearchBox onSearchChange={onSearchChange}/>
                <CardList robots={filteredRobots} error={error}/>    
                </div>
              )
  );
}

export default connect(state,action)(App);
