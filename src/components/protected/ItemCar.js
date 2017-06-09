import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

export default class ItemCar extends Component {
  constructor(){
  	super();
  	this.state={
  		mensaje: 'ItemCar'
  	}
  }

  render(){
  	return(
  		<div>
  			<h1>{this.state.mensaje}</h1>
  		
      
    </div> 
  	)
  }

}