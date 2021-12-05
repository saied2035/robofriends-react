import {useEffect,memo} from 'react';
import  CardList from '../cardList/cardList';
import SearchBox from '../searchBox/searchBox';
import Header from '../Header/Header';
import './MainPage.css';
const MainPage=(props) => {
    const {onRequestRobots,onSearchChange,filterRobots,isPending,error,robots} = props

    useEffect(() =>{
      onRequestRobots()
    },[onRequestRobots])

    return (
               isPending ? 
                   <div style={{height:'100vh'}}className='flex justify-center items-center'><h1>Loading</h1></div>
               :
               (
                  <div className="tc">
                  <Header/>
                  <SearchBox onSearchChange={(event) => onSearchChange(event,robots)}/>
                  <CardList robots={filterRobots} error={error}/>    
                  </div>
               )
    );
}

export default memo(MainPage);