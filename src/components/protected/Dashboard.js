import React, { Component } from 'react'
//import { getProductos } from '../../helpers/auth'
import { refprod } from '../../config/constants'
import { refcar } from '../../config/constants'
import SearchInput, {createFilter} from 'react-search-input'
import { Link } from 'react-router-dom'
import { App } from '../index'

export default class Dashboard extends Component {
  constructor(){
  	super();
  	this.state={
  		productos:[],
  		totalcarro: '',
  		searchTerm: ''
  	};
  	
  	this.cargarCarro = this.cargarCarro.bind(this);
  }
  
  componentWillMount(){
	refprod.once('value',snapshot=>{
		this.setState({
			productos: this.state.productos.concat(snapshot.val())
		});
	});
  }

cargarCarro(producto,i){
	let cantidad=this.refs['cantidad'+i].value;
	producto.cantidad=cantidad;
	refcar.push(producto)
	.then(function(msj){
		refcar.on('value',snapshot=>{
			let data=snapshot.val();
			totalcarro: Object.keys(data).length;
		});
	});	
}

  render () {
  	let filterproductos=this.state.productos.filter(createFilter(this.state.searchTerm))

    return (
    	
    <div>
        <div className="row">
			<div className="col-md-8 text-left"><h3>Catálogo de Productos</h3></div>
			<div className="col-md-4 text-right">
				<p>¿Que estas buscando? </p>
				<SearchInput className="search-input" placeholder="Buscar producto"
				onChange={this.searchUpdated}
				/>
			</div>
		</div>
		<div className="productos">
		{ 
			filterproductos.map((producto,i)=>{
				return(
				<div className="item" key={i}>
					<figure>
						<img className="imagen" src={producto.url}/>
					</figure>
					<div className="descripcion">
						<h5>Nombre: {producto.nombre}</h5>
						<p>Precio: S/. {producto.precio} </p>
						<p>Unidades disponibles: {producto.unidades}</p>
						<div className="botones">
							<Link to={`/Descripcion/${producto.nombre}`} className="btn btn-primary">Ver mas</Link>
							<button onClick={this.cargarCarro.bind(this, producto,i)} className="btn btn-success">Añadir</button>
							<input type="number" className="cantidad" ref={'cantidad'+i}/>
						</div>
					</div>
				</div>
				)
			})
		}
			
		</div>

	</div>
		
    )
  }

  searchUpdated (term) {
  	//xconsole.log(term)
    this.setState({searchTerm: term})
  }
}