import {memo} from 'react';

const Card = ({id,name,email}) => {
      return (
      	        <div className="flex justify-center flex-wrap pa2 ma2 br3 bg-light-yellow grow shadow-5" 
                     style={{width:'18rem',height:'22rem'}}>
                        <img alt="robot" src={`https://robohash.org/${id}?size=400x400`} 
                          width="200" height="200"/>
                       	<h2>{name}</h2>
                       	<p>{email}</p>
                 </div>
      	);
}

export default  memo(Card);