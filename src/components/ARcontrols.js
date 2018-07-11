import React from 'react';
import ARcontrol from './ARcontrols/ARcontrol';
import classes from './ARcontrols.css'

const arcontrols =(props)=>{
   
    let controls=props.brand.map((beer)=>{
       
        return <ARcontrol 
        brand={beer.name} 
        key={beer.name}
        disabled={props.disable[beer.name]}
        add={()=>props.addBeer(beer.name, beer.price)}
        remove={()=>props.removeBeer(beer.name,beer.price)}/>
    })

    return (
        <div className={classes.controlBox}>
        <div><span>Total Prices: </span> ${props.totalPrice.toFixed(2)} </div>
    {controls}
        <div className={classes.controlButton} >
        <button 
           disabled={props.totalPrice==0}
           onClick={props.checkOut}>CheckOut</button>
        <button onClick={props.clearOrder}>Cancel</button></div>
        </div>
    )
}


export default arcontrols;