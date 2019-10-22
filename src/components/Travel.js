import React from 'react';

const travel = [
  {
    destination: 'Sibiu',
    country: 'Romania',
    img: require('../img/sibiu.jpg'),
    distance: '1500 km'
  },
  {
    destination: 'Pompei',
    country: 'Italy',
    img: require('../img/pompei.jpg'),
    distance: '2436 km'
  },
  {
    destination: 'Amsterdam',
    country: 'Holland',
    img: require('../img/amsterdam.jpg'),
    distance: '1756 km'
  },
  {
    destination: 'Berlin',
    country: 'Germany',
    img: require('../img/berlin.jpg'),
    distance: '1120 km'
  },
  {
    destination: 'Porto',
    country: 'Portugal',
    img: require('../img/porto.jpg'),
    distance: '1500 km'
  },
];

const Travel = () => {

  return (<div>
    {
      travel.map((travel, i) => {
        return <React.Fragment key={i}>
          <p>{travel.destination}</p>
          <p>{travel.country}</p>
          <img src={travel.img}/>
          <p>{travel.distance}</p>
        </React.Fragment>
      })
    }
  </div>)
};
export default Travel;