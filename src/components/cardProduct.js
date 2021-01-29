import React from 'react'

function cardProduct(props){

    return (

        <div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
	                                             {props.titulo} {props.number}
												
												</div>
												
											</div>
										</div>


    )
}


export default cardProduct