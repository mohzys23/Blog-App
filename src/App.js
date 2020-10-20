import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <div className="App">

    <Router>

     <Switch>
           <Route exact path='/aboutus' component = {About} />  
           <Route exact path='/contact' component = {Contact} /> 
           <Route  exact path='/login' component = {Login} /> 
           <Route  path='/' component ={Home} /> 
      </Switch>
    </Router>
   
    </div>
  );
}

export default App;
