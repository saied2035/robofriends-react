import {memo} from 'react';
import Card from '../card/card'
const CardList = ({robots,error}) => {
         if(error.length) {
          	return (
               <div style={{height:'70vh', width : '100%'}}className=' f3 flex justify-center items-center'>
                    <h3>the robots not found for now something went wrong</h3>
               </div>
          	);
         }

         return (
            <div style={{height:'75vh',overflowY:'auto'}} className="flex justify-center flex-wrap">    
                 {robots.map( item => <Card key={item.id} id={item.id} name={item.name} email={item.email} />)}
            </div>
         )          		
          
		
}

export default  memo(CardList);
