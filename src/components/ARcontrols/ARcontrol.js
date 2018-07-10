import React from 'react';
import classes from './ARcontrol.css'

const arcontrol =(props)=> (
        <div className={classes.controlContainer}>
            <div className={classes.brand}>{props.brand}</div>
            <button className={classes.less}>Less</button>
            <button 
               className={classes.more}
                onClick={props.add}>More</button>

            </div>
           )




export default arcontrol;