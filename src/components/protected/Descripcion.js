import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import axios from 'axios';

export default class Descripcion extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		mensaje: 'Bienvenidos....',
      producto: []
  	}
  }

  componentWillMount() {
    let pro: []
    axios.get('https://crud-58fe9.firebaseio.com/productos.json')
      .then( (response) => {
        response.data.forEach(function(product){
          pro.push(product)
        })
        this.setState({
          producto: pro
        })
      })
      .catch( (error) => {
        console.log(error);
    });  
  }

  render(){
  	return(
  		<div>
  			<h1>{this.state.producto}</h1>
  		
      <div className="row">
        <div className="col-md-12">
          <h1></h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <figure>
            <img className="imagen" src="{ }"/>
          </figure>
        </div>
        <div className="col-sm-6">
          <div className="descripcion">
            <p>Precio: </p>
            <p>Unidades Disponibles: </p>
          </div>
        </div>
        </div>
      <Link to="/Dashboard" className="btn btn-success">Regresar</Link>
    </div> 
  	)
  }

}