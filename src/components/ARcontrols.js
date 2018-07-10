import React from 'react';
import ARcontrol from './ARcontrols/ARcontrol';
import classes from './ARcontrols.css'

const arcontrols =(props)=>{
    console.log(props.brand)
    let controls=props.brand.map((beer)=>{
        return <ARcontrol brand={beer.name} key={beer.name}/>
    })
 console.log(controls);
    return (
        <div className={classes.controlBox}>
        <div><span>Total Prices: </span> ${props.totalPrice} </div>
    {controls}
        </div>
    )
}


export default arcontrols;