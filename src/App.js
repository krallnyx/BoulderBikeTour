import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'  
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderNavbar from './Layout/HeaderNavbar' 
import Home from './Pages/Home'
import Footer from './Layout/Footer'
import Location from './Pages/Location'  
import Contest from './Pages/Contest'
import Photos from './Pages/Photos'
import Riders from './Pages/Riders'
import Notfound from './Pages/NotFound'  
  

function App() {
    return ( 
        <Router>
            <React.Fragment>
                <HeaderNavbar />
            </React.Fragment>
            <React.Fragment>
                <Switch>  
                    <Route exact path="/" component={Home} />  
                    <Route path="/Location" component={Location} />  
                    <Route path="/Contest" component={Contest} />  
                    <Route path="/Photos" component={Photos} /> 
                    <Route path="/Riders" component={Riders} /> 
                    <Route component={Notfound} />  
                </Switch>
            </React.Fragment>
            <React.Fragment>
                <Footer />  
            </React.Fragment>
        </Router>  
    )
}  

export default App;