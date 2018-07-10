import React, { Component } from 'react';
import Beers from '../components/Beers';
import ARcontrols from '../components/ARcontrols'


class BeerOrder extends Component {
    state={
        beers:[
          {name:'budweiser', number:1, price:3.5},
        {name:'castle', number:0, price:5.0},
        {name:'corona', number:3, price:4.5},
        {name:'heineken', number:2, price:3.8},
        {name:'stella', number:0, price:4.8},
        {name:'duff', number:0, price:4.3}  
        ],

        totalPrice:0
       }
     render(){
         
         return (
             <div>
              <Beers name={this.state.beers}/>
             
              <ARcontrols brand={this.state.beers}/>
             </div>
        
         )
     }

}

export default BeerOrder;