import React from 'react';
import Card from './card'
const CardList = ({robots,error}) => {
	             if(error.length) {
	             	return (
                          <div style={{height:'70vh', width : '100%'}}className=' f3 flex justify-center items-center'>
                          <h3>the robots not found for now something went wrong</h3>
                          </div>
	             		);
	             }
	            return (
	            robots.map( item => {
                   return (
                      <Card key={item.id} id={item.id} name={item.name} email={item.email} />
                  )
	            }
            )
	            	);

          		
          
		
}

export default CardList;
