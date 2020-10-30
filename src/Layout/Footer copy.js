import React from 'react';
import {NavLink} from 'react-router-dom'  

function Footer() {  
  return (
    <footer className="page-footer bg-dark shadow-lg">
        <div className="container-fluid">
          <div className="row">
            <div className="pt-5 col-xs-12 col-sm-2 col-md-5 col-lg-8 mt-1 text-white">© Boulder Bike Tour 2020</div>
            <ul className="list-unstyled ml-auto mr-5 my-1">
              <li>
              <NavLink className="text-white mx-4" to="/" exact>Home</NavLink>
              </li>
              <li>
              <NavLink className="text-white mx-4" to="/Riders" exact>Riders</NavLink>
              </li>
              <li>
              <NavLink className="text-white mx-4" to="/Location" exact>Location</NavLink>
              </li>
              <li>
              <NavLink className="text-white mx-4" to="/Photos" exact>Photos</NavLink>
              </li>
              <li>
              <NavLink className="text-white mx-4 mb-0 pb-0" to="/Contest" exact>Contest</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )  
}  

export default Footer