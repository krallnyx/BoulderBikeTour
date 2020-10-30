import React from 'react';
import {NavLink} from 'react-router-dom'  

function Footer() {  
  return (
    <footer className="page-footer bg-dark shadow-lg">
        <div className="container-fluid">
          <div className="row">
            <div className="pt-5 col-xs-12 col-sm-2 col-md-5 col-lg-8 mt-1 text-white">© Boulder Bike Tour 2020</div>
            <nav className="list-unstyled ml-auto mr-5 mb-3">
              
              <NavLink className="text-white mx-2" to="/" exact>Home</NavLink>
              
              <NavLink className="text-white mx-2" to="/Riders" exact>Riders</NavLink>
              
              <NavLink className="text-white mx-2" to="/Location" exact>Location</NavLink>
              
              <NavLink className="text-white mx-2" to="/Photos" exact>Photos</NavLink>
              
              <NavLink className="text-white mx-2" to="/Contest" exact>Contest</NavLink>
              
            </nav>
          </div>
        </div>
      </footer>
  )  
}  

export default Footer