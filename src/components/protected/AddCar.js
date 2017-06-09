import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import { refprod } from '../../config/constants'

export default class AddCar extends Component {
  constructor(){
  	super();
  	this.state={
  		mensaje: 'add car'
  	}
  }

  componentWillMount(){
    refprod.once('value',snapshot=>{
      this.setState({
        productos: this.state.productos.concat(snapshot.val())
      });
    });
  }

  render(){
  	return(
  		<div>
  			<h1>{this.state.mensaje}</h1>
  		
      
    </div> 
  	)
  }

}