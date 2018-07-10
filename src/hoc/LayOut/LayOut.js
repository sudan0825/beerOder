import React, { Component } from 'react';
import classes from './LayOut.css'

class LayOut extends Component {
    
    render (){
        
        return (
         <div>
            <div>Top Section</div>
            <main className={classes.main}>
             {this.props.children}
            </main>
            </div>
        )
    }
}
export default LayOut;