import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Descripcion extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		mensaje: 'Bienvenidos....',
      producto: {}
  	}
  }

  componentWillMount() {
    console.log(this.props.match.params.nombre)
    let item=this.props.match.params.nombre
    axios.get('https://crud-58fe9.firebaseio.com/productos.json')
      .then( (response) => {
        var pro={};
        response.data.forEach(function(product){
          if(product.nombre===item){
            pro=product;
          }
        });
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
  			<h1>{this.state.producto.nombre}</h1>
      
      <div className="row">
        <div className="col-md-12">
          <h1></h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <figure>
            <img className="imagen" src={this.state.producto.url}/>
          </figure>
        </div>
        <div className="col-sm-6">
          <div className="descripcion">
            <p>Precio: {this.state.producto.precio}</p>
            <p>Unidades Disponibles: {this.state.producto.unidades}</p>
          </div>
        </div>
        </div>
        <br/>
      <Link to="/Dashboard" className="btn btn-success">Regresar</Link>
    </div> 
  	)
  }

}

