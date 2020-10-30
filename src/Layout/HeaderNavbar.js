
import React from 'react'  
import {NavLink} from 'react-router-dom' 


function HeaderNavbar () {  
    return (
        <div>
        	<nav className="navbar navbar-expand-md bg-dark navbar-dark rounded-0 shadow-lg">
    			<a className="navbar-brand" href="/">
					Boulder Bike Tour
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navbarContent" className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto mx-2 my-3">
						<li className="nav-item ">
            				<NavLink className="text-white mx-4" to="/" exact>Home</NavLink>
						</li>
						<li className="nav-item">
           		 			<NavLink className="text-white mx-4" to="/Riders" exact>Riders</NavLink>
						</li>
            			<li className="nav-item">
            				<NavLink className="text-white mx-4" to="/Location" exact>Location</NavLink>
						</li>
						<li className="nav-item">
            				<NavLink className="text-white mx-4" to="/Photos" exact>Photos</NavLink>
						</li>
						<li className="nav-item">
            				<NavLink className="text-white mx-4" to="/Contest" exact>Contest</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
    )  
}  
export default HeaderNavbar  