import React from 'react';

import logo from './logo.svg';
import Travel from './components/Travel';

import './App.scss';

function App() {

  return (
    <React.Fragment>
      <Travel destination = 'Mountains' country = 'Romania' photo ='../../img/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg' distance = '360 km'/>
      <Travel destination = 'Seaside' country = 'Romania' photo ='../../img/marion-michele-WXj7S4OZGYg-unsplash.jpg' distance = '210 km'/>
    </React.Fragment>
  );
}

export default App;
