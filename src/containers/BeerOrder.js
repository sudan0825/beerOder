import React, { Component } from 'react';
import Beers from '../components/Beers';
import ARcontrols from '../components/ARcontrols'
import CheckOutSummary from '../components/checkOutSummary/checkOutSummary';
import Backdrop from '../components/Backdrop/Backdrop';



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
        
        totalPrice:0,
        summaryWindow:false
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
    removeBeer=(brand,price)=>{
        
        let newBeers=[...this.state.beers];
        let oldPrice=this.state.totalPrice;
        let newPrice=oldPrice-price;
        
       newBeers.forEach((elem)=>{
           if(elem.name===brand){
               
               elem.number--;
           }
       })
        this.setState({beers:newBeers,
                            totalPrice:newPrice});
    }
    clearOrder=()=>{
        let newState={...this.state}
       newState.beers.forEach((beer)=>{
           beer.number=0;
       })
        newState.totalPrice=0;
        console.log(newState)
        this.setState({beers:newState.beers,
                      totalPrice:newState.totalPrice});
    }
    checkOut=()=>{
        this.setState({summaryWindow:true})
    }
    cancelCheckOut=()=>{
        this.setState({summaryWindow:false})
    }
    submitOrder=()=>{
      
        this.setState({summaryWindow:false})
          alert("send to backend")
    }
     render(){
         let disableLessButton=[];
         
         this.state.beers.forEach((beer, i)=>{
             disableLessButton[beer.name]=beer.number<=0
         })
      
         return (
             <div>
              <Backdrop summaryWindowShow={this.state.summaryWindow}
                    cancelCheckOut={this.cancelCheckOut}/>
             <CheckOutSummary 
             order={this.state.beers}
             totalPrice={this.state.totalPrice}
             summaryWindowShow={this.state.summaryWindow}
             cancelCheckOut={this.cancelCheckOut}
             submitOrder={this.submitOrder}
              />
             
             
              <Beers name={this.state.beers}/>
             
              <ARcontrols 
                  brand={this.state.beers} 
                  totalPrice={this.state.totalPrice}
                  addBeer={this.addBeer}
                  removeBeer={this.removeBeer}
                  disable={disableLessButton}
                  clearOrder={this.clearOrder}
                  checkOut={this.checkOut}
              />
             
             </div>
        
         )
     }

}

export default BeerOrder;