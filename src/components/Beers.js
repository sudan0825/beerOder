import React from 'react';
import classes from'./Beers.css';
import Beer from './Beer/Beer';

const beers=(props)=>{
    let transformOrder=props.name.map((beer)=>{
        return [...Array(beer.number)].map((_, i)=>{
            return <Beer key={beer + i} brand={beer.name}/>  
        })


        })
        return (
            <div className={classes.beers} >
            {transformOrder}

            </div>
        )
    }

export default beers;