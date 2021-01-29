import React from 'react';
import logo from './logo.svg';
import './App.css';
import './cssBostrap.css'
import Cardproduct from './components/cardProduct'
import Lastproducts from './components/lastProducts'
import Menulateral from './components/menuLateral'
import MenuSuperior from './components/menuSuperior'
import Tarjetastats from './components/tarjetaStats'
import Tablavalores from './components/tablaValores'
import Tablatitulo from './components/tablaTitulos'
import Contador from './components/contador'
import Gif from './components/gif'
import Productos from './components/productos'
import TarjetaCategory from './components/tarjetaCategory'
import TablaProductos from './components/tablaProductos'
import UltimoAdd from './components/ultimoAdd'

let tarjetas = [
	{
		titulo : "Products in Data Base",
		cifra : "135",
		color : "primary",
		icono : "primary"
	},
	{
		titulo : "Amount in products",
		cifra : "546.456",
		color : "success",
		icono : "dollar-sign"
	},
	{
		titulo : "Users quantity",
		cifra : "38",
		color : "warning",
		icono : "user-check"
	}
]



let numerosCategory = [1 ,2 ,3 , 4 ,5 ,6]

function App() {
  return (
    <div id="wrapper">

	
		<Menulateral />
	

		
		<div id="content-wrapper" className="d-flex flex-column">

		
			<div id="content">

				
				<MenuSuperior />
		

			
				<div className="container-fluid">

				
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Milenio Oscuro Dashboard</h1>
					</div>

			
					<div className="row">

           {/*  {tarjetas.map( (data , i ) => <Tarjetastats key= {i} data = {data} /> )}  */}

			<Productos />
			
		   {/* <Tarjetastats key= {i} data = {data} /> */}
		   {/* <Tarjetastats titulo = "PRODUCTS IN DATA BASE"  color ="primary"/>
            <Tarjetastats titulo = "AMOUNT IN PRODUCTS" color ="success" />
            <Tarjetastats titulo = "USERS QUANTITY" color = "warning" /> */}
					</div>

					<div class="card shadow mb-4">
					<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Ultimo producto añadido</h6>
								</div>
						<div class="card-body">
							<div class="table-responsive">
								<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<Tablatitulo />
									
									<tbody>
									<UltimoAdd />
										
									</tbody>
								</table>
							</div>
						</div>
					</div>



					<div className="row">

						<Lastproducts />

						
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Cantidad de productos por categoria</h6>
								</div>
								<div className="card-body">
									<div className="row">
										{/* {numerosCategory.map( item => < Cardproduct titulo = "category" number = {item} />)} */}

										<TarjetaCategory />
										
										

									</div>
								</div>
							</div>
						</div>
						
					</div>

					{/* <Productos categoria={"videoJuegos"} />

					<Gif />

					<Contador num={1} />  */}
					

					<h1 class="h3 mb-2 text-gray-800">Lista de productos</h1>
					
					
					<div class="card shadow mb-4">
						<div class="card-body">
							<div class="table-responsive">
								<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<Tablatitulo />
									
									<tbody>
									<TablaProductos />
										
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2020</span>
					</div>
				</div>
			</footer>

		</div>

	</div>
  );
}

export default App;
