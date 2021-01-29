import React , {Component} from 'react'


class tarjetaCategory extends Component{

    constructor(props){
        super(props)
        this.state = {
            cantCatOne : [],
            cantCatTwo : [],
            cantCatThree : []

        }
    }

    apiCall(url , consecuencia){
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }


componentDidMount(){
    this.apiCall("http://localhost:3000/products/developers" , this.productosTotales)

}

productosTotales = (data) => {
    data.filter(prod => prod.category == "videoJuegos").map(prodFiltrados => this.state.cantCatOne.push(prodFiltrados.name))
    data.filter(prod => prod.category == "juegosDeMesa").map(prodFiltrados => this.state.cantCatTwo.push(prodFiltrados.name))
    data.filter(prod => prod.category == "comics").map(prodFiltrados => this.state.cantCatThree.push(prodFiltrados.name))

    this.setState({})
}

componentDidUpdate(){

}






    render(){
        return(
            <>
            <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    Video Juegos :   {this.state.cantCatOne.length}
                
                
                </div>
                
            </div>
        </div>
        <div className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                Juegos de Mesa :  {this.state.cantCatTwo.length}

            </div>
      </div>
    </div>
    <div className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                Comics :  {this.state.cantCatThree.length}

            </div>
      </div>
    </div>
</>
        )
    }
}

export default tarjetaCategory