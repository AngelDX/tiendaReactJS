import React, { Component } from 'react'
import { refcar } from '../../config/constants'
import { Link } from 'react-router-dom'

export default class ItemCar extends Component {
  constructor(){
  	super();
  	this.state={
  		mensaje: 'Carrito de Compras',
      items:[]
  	}
  }

  componentWillMount(){
    const self = this;

    refcar.on('value',snapshot=>{
      snapshot.forEach(function(data){
        self.setState({
            items: self.state.items.concat(data.val())
        })
      });
    });
  }

  render(){
  	return(
  		<div>
  			<h1>{this.state.mensaje}</h1>
        <div className="row">
          <div className="col-sm-6">
          {
            this.state.items.map((item,i)=>{
              let subtotal=item.precio*item.cantidad
              return(
              <div className="row lista">
                <div className="col-sm-6">
                  <img className="imagen" src={item.url}/> 
                </div>
                <div className="col-sm-6">
                  <p>{item.nombre}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio: {item.precio}</p>
                  <p>Subtotal: {subtotal} </p>
                </div>
              </div>

              )
            })
          }
          
          
        </div>
        <div className="col-sm-6">
          <h3>Total: </h3>
          <Link to="/dashboard" className="btn btn-default">Cancelar</Link>
          <Link to="/dashboard" className="btn btn-default">Pagar</Link>
        </div>
      </div>
    </div> 
  	)
  }

}