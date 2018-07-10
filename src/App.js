import React, { Component } from 'react';
import BeerOrder from './containers/BeerOrder';
import LayOut from './hoc/LayOut/LayOut'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <LayOut>
        <BeerOrder/>
        </LayOut>
      </div>
    );
  }
}

export default App;
