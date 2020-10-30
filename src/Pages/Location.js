import React from 'react' 
import Map from '../Components/Map'


function Location() {  
  return (
    <div className="container-fluid">
        <div className="row">
            <h3 className="mx-auto my-5">Boulder Bike Tour riders location's</h3>
        </div>
        <div className="row">
            <Map />
        </div>
    </div>
)  
}  
export default Location