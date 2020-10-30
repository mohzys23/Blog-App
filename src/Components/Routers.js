import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Contact from './Contact';
import About from './About';
import TechLatest from './TechLatest';
import Post from './Post';
import Signup from './Signup';


function Routers() {
    return(
        <div>
            <Router>

     <Switch>
     
            <Route exact path='/signup' component = {Signup} />
            <Route exact path='/post' component = {Post} />
           <Route exact path='/tech-latest' component = {TechLatest} />
           <Route exact path='/aboutus' component = {About} />  
           <Route exact path='/contact' component = {Contact} /> 
           <Route  exact path='/login' component = {Login} /> 
           <Route  path='/' component ={Home} /> 
      </Switch>
    </Router>
        </div>
    );
}


export default Routers;