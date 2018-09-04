//Purpose: Determines the view (login page or dashboard) 
import React,{Component} from 'react';
import Login from "./login/Login";

export default class MainPage extends Component{

    render(){
        return(
            <div><Login /></div>
        )
    }
}