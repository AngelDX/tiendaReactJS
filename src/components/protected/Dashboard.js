import React, { Component } from 'react'
//import { getProductos } from '../../helpers/auth'
import { refprod } from '../../config/constants'
import SearchInput, {createFilter} from 'react-search-input'
import { Link, Switch } from 'react-router-dom'

export default class Dashboard extends Component {
  constructor(){
  	super();
  	this.state={
  		productos:[],
  		searchTerm: ''
  	};
  
  }
  
  componentWillMount(){
	refprod.once('value',snapshot=>{
		this.setState({
			productos: this.state.productos.concat(snapshot.val())
		});
	});
  }

  datos = () => {
    console.log("botn añadir");
  }

  verMas(){
  	console.log("ver ms")
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
			filterproductos.map(producto=>{
				return(
				<div className="item" key={producto.id}>
					<figure>
						<img className="imagen" src={producto.url}/>
					</figure>
					<div className="descripcion">
						<h5>Nombre: {producto.nombre}</h5>
						<p>Precio: S/. {producto.precio} </p>
						<p>Unidades disponibles: {producto.unidades}</p>
						<div className="botones">
							<Link to={`/Descripcion/${producto.nombre}`} className="btn btn-primary">Ver mas</Link>
							<Link to="/AddCar" className="btn btn-success">Añadir</Link>
							<input type="number" className="cantidad" value="1"/>
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