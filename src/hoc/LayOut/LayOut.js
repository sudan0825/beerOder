import React, { Component } from 'react';
import classes from './LayOut.css';
import Topbar from '../../components/Topbar/Topbar'


class LayOut extends Component {
    
    render (){
        
        return (
         <div>
            <Topbar/>
            <main className={classes.main}>
             {this.props.children}
            </main>
            </div>
        )
    }
}
export default LayOut;