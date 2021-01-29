import React , {Component} from 'react'

class ultimoAdd extends Component{

constructor(props){
    super(props)
    this.state = {
        productos : []
    }
}

apiCall(url, consecuencia){
    fetch(url)
    .then( response => response.json())
    .then( data => consecuencia(data))
    .catch( error => console.log(error))
}

componentDidMount(){

    this.apiCall("http://localhost:3000/products/developers", this.ultimoAgregado)


}

ultimoAgregado = (data) => {
    this.state.productos.push(data.pop())
    this.setState({})
    
}




    render(){
        return(
            <>
            {this.state.productos.map(prod =>
                    <tr>
                                                        <td>{prod.id}</td>
                                                        <td>{prod.name}</td>
                                                        <td>${prod.price}</td>
                                                        <td>{prod.category}</td>
                                                        <td>{prod.offer}</td>
                                                        <td>${prod.newprice}</td>
                                                        
               
            
                    </tr>
                     )}
                    </>
        )
    }
}


export default ultimoAdd