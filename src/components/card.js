import {memo} from 'react';

const Card = ({id,name,email}) => {
      return (
      	        <div className="tc pa2 ma2 br3 bg-light-yellow grow shadow-5">
                    <img alt="robot" src={`https://robohash.org/${id}?200x200`} 
                      width="200" height="200"/>
                 	<h2>{name}</h2>
                 	<p>{email}</p>
                 </div>
      	);
}

export default  memo(Card);