import React , {Component} from 'react'


class gif extends Component {
    
    
    constructor(props){
        super(props)
        this.state = {
            nuevoGif : ""

        }         
    }

apiCall(url , consecuencia){
    fetch(url)
    .then( response => response.json())
    .then( data => consecuencia(data))
    .catch( error => console.log(error))
}
    


componentDidMount(){
    
    this.traerGifNuevo()

}

traerGifNuevo (){
    this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=Yy1Ik3wz2Qg7htUtzMfw5OK8EbBhO1Q1&tag=&rating=g" , this.mostrarGif)
}

mostrarGif = (data) => {

    this.setState({
        nuevoGif : data.data.image_url
    })
}

componentDidUpdate(){
   
}
    
    render (){



        return(


            <div>
                <img src={this.state.nuevoGif}></img>
                <button onClick={ () => this.traerGifNuevo()}> traer otro gi</button>
            </div>
        )
    }
}

export default gif