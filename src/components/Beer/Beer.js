import React, {Component} from 'react';
import classes from './Beer.css';
import budweiser from '../../../src/assets/budweiser.jpeg'
import castle from '../../../src/assets/castle.jpeg'
import corona from '../../../src/assets/corona.jpeg'
import duff from '../../../src/assets/duff.jpeg'
import heineken from '../../../src/assets/heineken.jpeg'
import stella from '../../../src/assets/stella.jpeg'

class Beer extends Component{
    render (){
        //initial beer to null;
        let br= null;
        switch (this.props.brand){
            case ('budweiser'):
               
                br=<img src={budweiser} alt='budweiser'/>
                    break;
            case ('castle'):
                br=<img src={castle} alt='castle'/>
                    break;
            case ('corona'):
                br=<img src={corona} alt='corona'/>
                    break;
            case ('duff'):
                br=<img src={duff} alt='duff'/>
                    break;
            case ('heineken'):
                br=<img src={heineken} alt='heineken'/>
                    break;
            case ('stella'):
                br=<img src={stella} alt='stella'/>
                    break;
            default:
                br=null;

        }
        
        return br;

    }
}
export default Beer;