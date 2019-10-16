import React from 'react';

const Travel = (props) => {

  return <div>
     <p>Your destination: {props.destination}</p>
      <p>Contry: {props.country}</p>
      <img className='img' src={props.photo}/>
      <p>Destination: {props.distance}</p>
  </div>
};
export default Travel;