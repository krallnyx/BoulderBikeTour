import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from '../Components/Counter'  
import Cards from '../Components/Cards'  

function Home() {  
  return (
    <div>
        
      <div className="container">
        <div className="row">
          <div className="h1 mx-auto text-dark">
            Welcome to the Boulder Bike race 2020!
          </div>
          <Counter /> 
          <Cards /> 
        </div>
      </div>
    </div>
  )  
}  
export default Home