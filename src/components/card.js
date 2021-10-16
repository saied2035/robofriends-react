import React from 'react';

const Card = ({id,name,email}) => {
      return (
      	        <div className="tc dib pa2 ma2 br3 bg-light-yellow grow bw5 shadow-5">
                    <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
                 	<h2>{name}</h2>
                 	<p>{email}</p>
                 </div>
      	);
}

export default Card;