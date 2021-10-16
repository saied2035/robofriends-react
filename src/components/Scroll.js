import React from 'react';

const Scroll = (props) => {
		   	return(
		   	<div style={{overflowY:'auto', height:'75vh', width:'100%'}} className="dib pa2">
	          {props.children}
          </div>
          );
          
		
} 
export default Scroll;