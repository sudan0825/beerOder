import React from 'react';
import classes from './checkOutSummary.css';



const checkOutSummary =(props)=>{
    
    let orders=props.order;
    let formatOrder=orders.map((beer,i)=>{
        return (<div key={beer.name} 
                className={classes.orderWraper} >
                <p className={classes.brand}><span>{beer.name}: </span>{beer.number}</p>
                
                </div>)
    })
    return ( <div className={classes.checkOutSummary} 
            style={{opacity: props.summaryWindowShow?'1':'0',
                display:props.summaryWindowShow?'block':'none'}}>
           {formatOrder}
            <p className={classes.price}><span>Total Price :</span> {props.totalPrice.toFixed(2)}</p>
            <div>
               <button onClick={props.submitOrder}>Continue</button>
               <button onClick={props.cancelCheckOut}>Cancel</button>
            </div>
    </div> 
)
    
}

export default checkOutSummary;