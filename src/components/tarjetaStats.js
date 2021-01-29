import React from 'react'
import PropTypes from 'prop-types'

function tarjetaStats(props){
   
	return (


              
                            <div className="col-md-4 mb-4">
							<div className= {`card border-left-${props.data.color} shadow h-100 py-2`}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className={`text-xs font-weight-bold text-${props.data.color} text-uppercase mb-1`}> {props.data.titulo}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">${props.data.cifra}</div>
										</div>
										<div className="col-auto">
											<i className={`fas fa-${props.data.icono} fa-2x text-gray-300`}></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						
						

        
    )

}



tarjetaStats.defaultProps = {
	data : {
		color : "dark"
	}
}

tarjetaStats.propTypes = {
	titulo : PropTypes.string,
	color : PropTypes.string,
	cifra : PropTypes.number ,

}


export default tarjetaStats