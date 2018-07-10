import React from 'react';
import ARcontrol from './ARcontrols/ARcontrol';
import classes from './ARcontrols.css'

const arcontrols =(props)=>{
  
    let controls=props.brand.map((beer)=>{
        
        return <ARcontrol 
        brand={beer.name} 
        key={beer.name}
        add={()=>props.addBeer(beer.name, beer.price)}/>
    })

    return (
        <div className={classes.controlBox}>
        <div><span>Total Prices: </span> ${props.totalPrice.toFixed(2)} </div>
    {controls}
        </div>
    )
}


export default arcontrols;