import React from 'react';
import classes from './Backdrop.css';


const backdrop =(props)=>(
<div className={classes.backdrop} 
    style={{display:props.summaryWindowShow?"block":"none",
           opacity:props.summaryWindowShow? "0.5":"0"}}
    onClick={props.cancelCheckOut}></div>
)
    
export default backdrop;
