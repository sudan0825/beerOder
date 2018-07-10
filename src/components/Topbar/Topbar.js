import React from 'react';
import classes from'./Topbar.css';
import NavigationMenue from '../../components/navigation/navigationMenue/navigationMenue'

const topbar=(props)=>{
  
        return (
            <div className={classes.Topbar}>
            <NavigationMenue/>

            </div>
        )
    }

export default topbar;