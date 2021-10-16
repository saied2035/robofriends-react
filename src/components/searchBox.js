import React from 'react';

const SearchBox = ({onSearchChange,numOfRobots}) => {
	   return (
	 <div className="pa3">
	  <input onChange={onSearchChange} className="pa3 ba b--gold bg-light-yellow" type="text" placeholder="search a robot" />
	  </div>
	  );
}

export default SearchBox;