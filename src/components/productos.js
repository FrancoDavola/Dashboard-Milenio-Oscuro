import React, {Component} from 'react'

class productos extends Component {
    
    constructor(props){
        super(props)
        this.state = {
           productos : "",
           category : 3,
           prodPorCategory : this.props.categoria,
           cantUsuarios : "",
           filtrados : [],
           ultimoPrdo : ""
        }
    }

    

    apiCall(url , consecuencia){
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }


    componentDidMount(){
        console.log("apareci")
        this.apiCall("http://localhost:3000/products/developers" , this.productosTotales)
        this.apiCall("http://localhost:3000/users/developers" , this.usuariosTotales)
    }

    usuariosTotales = (data) => {
        this.setState({
            cantUsuarios : data.length
        })

       
    }
    

    productosTotales = (data) => {

      data.filter(prod => prod.category == "videoJuegos").map(prodFiltrados => this.state.filtrados.push(prodFiltrados.name))
      /* this.state.ultimoPrdo.push(data.pop()) */
        this.setState({
            productos : data.length,
            /* ultimoPrdo : data.pop() */
        })
        
    }

    
    
    componentDidUpdate(){
        console.log("me actualize")
        
    }
    
    
    
    render(){
        return(
            <>
        <div className="col-md-4 mb-4">
            <div className= {`card border-left-primary shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}>Cantidad de productos totales </div>
        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.productos}</div>
                        </div>
                        <div className="col-auto">
                        <i className={`fas fa-clipboard-list fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                      <div class="col-md-4 mb-4">
						 <div class="card border-left-success shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Cantidad de categorias</div>
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.category}</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-chart-pie fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <div class="col-md-4 mb-4">
							<div class="card border-left-warning shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de usuarios
											</div>
                                           <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.cantUsuarios}</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-user-check fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						
     
       
</>
        
        
        )
    }
}



export default productos