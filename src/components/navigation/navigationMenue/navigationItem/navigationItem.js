import React, { Component } from 'react';
import classes from'./navigationItem.css';


class NavigationItem extends Component {
    
    checkOut(){
        console.log("check out")
    }
    render (){
        return (<div className={classes.navigationItem}>
                <div>Select Beers</div>
                <div onClick={this.checkOut}>Checkout</div>
                </div>) 
                }


                }




export default NavigationItem;