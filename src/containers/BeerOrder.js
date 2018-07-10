import React, { Component } from 'react';
import Beers from '../components/Beers';
import ARcontrols from '../components/ARcontrols'


class BeerOrder extends Component {
    state={
        beers:[
          {name:'budweiser', number:0, price:3.5},
        {name:'castle', number:0, price:5.0},
        {name:'corona', number:0, price:4.5},
        {name:'heineken', number:0, price:3.8},
        {name:'stella', number:0, price:4.8},
        {name:'duff', number:0, price:4.3}  
        ],

        totalPrice:0
       }
    addBeer=(brand, price)=>{
     
        let newBeers=[...this.state.beers];
        let oldPrice=this.state.totalPrice;
        let newPrice=oldPrice+price;
        
       newBeers.forEach((elem)=>{
           if(elem.name===brand){
               elem.number++;
           }
       })
        this.setState({beers:newBeers,
                            totalPrice:newPrice});
    }
     render(){
         
         return (
             <div>
              <Beers name={this.state.beers}/>
             
              <ARcontrols 
                  brand={this.state.beers} 
                  totalPrice={this.state.totalPrice}
                  addBeer={this.addBeer}
              />
             </div>
        
         )
     }

}

export default BeerOrder;