import {memo} from 'react';

const Card = ({id,name,email}) => {
      return (
      	        <div className="tc pa2 ma2 br3 bg-light-yellow grow shadow-5">
                    <img alt="robot" src={`https://robohash.org/${id}?300x300`} 
                      width="300" height="300" type="image/avif" />
                 	<h2>{name}</h2>
                 	<p>{email}</p>
                 </div>
      	);
}

export default  memo(Card);