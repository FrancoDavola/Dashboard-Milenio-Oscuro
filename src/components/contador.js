import React, {Component} from 'react'

class contador extends Component {

    constructor(props){
        super(props)
        this.state = {

            valor : this.props.num

        }
    }

    componentDidMount(){
       
    }
    
    componentDidUpdate(){
        
    }

    sumar() {
        this.setState({
            valor : this.state.valor + 1
        })
    }

    restar() {
        this.setState({
            valor : this.state.valor - 1
        })
    }





    render (){

        return (
                      
            <div>
                <h1>{this.state.valor}</h1>
                <button onClick= { () => this.sumar() }> sumar</button>
                <button onClick= { () => this.restar() }> restar</button>
                
            </div>

        )
    }
}

export default contador