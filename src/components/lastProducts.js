import React, {Component} from 'react'

class lastProducts extends Component{
   
	constructor(props){
		super(props)
		this.state = {
			usuarios : []
		}
	}


	apiCall(url , consecuencia){
		fetch(url)
		.then( response => response.json())
		.then( data => consecuencia(data))
		.catch( error => console.log(error))
	}

	componentDidMount(){
		this.apiCall("http://localhost:3000/users/developers", this.totalUsuarios)
	}


	totalUsuarios = (data) => {
		
		this.setState({
			usuarios : data
		})
		
	}

	render(){


	return (

                    <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
							<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Lista de usuarios</h6>
								</div>
							<div class="card-body">
							<div class="table-responsive">
								<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									
									<thead>
										<tr>
											<th>Id</th>
											<th>Nombre</th>
											<th>Email</th>
											
										</tr>
									</thead>
									<tbody>

										{this.state.usuarios.map(users => 
										<tr>
											<td>{users.id}</td>
											<td>{users.username}</td>
											<td>{users.email}</td>
											
										</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
							</div>
						</div>


    )
}
}


export default lastProducts