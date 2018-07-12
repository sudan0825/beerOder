import React, { Component } from 'react';
import Beers from '../components/Beers';
import ARcontrols from '../components/ARcontrols'
import CheckOutSummary from '../components/checkOutSummary/checkOutSummary';
import Backdrop from '../components/Backdrop/Backdrop';
import Spinner from '../components/Spinner/Spinner';
import axios from '../axios-beershop.js'



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
        summaryWindow:false,
        error:false,
        loading:false
       }


    componentDidMount(){
        axios.get('https://beershop20180711.firebaseio.com/beersInfo.json')
          .then(response =>{
            
            //this.setState({beers:response.data})
            console.log(response)
        })
        .catch(error => {
            
            //this.setState({error:true});
            console.log(error)
        })
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
        //waiting for post data to server
        this.setState({loading: true});
        
        
        const order = {
            beers: this.state.beers,
            price: this.state.totalPrice
        }
        
        axios.post('orders.json', order)
        .then(response => {
            this.setState({loading:false, summaryWindow:false})
        })
        .catch (error=>{
             this.setState({loading:false, summaryWindow:false})
        })
    }
     render(){
         let disableLessButton=[];
         
         this.state.beers.forEach((beer, i)=>{
             disableLessButton[beer.name]=beer.number<=0
         })
         let waitingLoading = null;
         let serverCommunicate= this.state.error ? <p> beers can't be post!</p>: <Spinner/>
         
         if(this.state.loading) {
         
            waitingLoading=<Spinner/>
         }
      
         return (
             <div>
             {waitingLoading}
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
             {serverCommunicate}
             </div>
        
         )
     }

}

export default BeerOrder;