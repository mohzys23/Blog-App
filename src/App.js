import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';
import TechLatest from './Components/TechLatest';
import Post from './Components/Post';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">

    <Router>

     <Switch>
            <Route exact path='/signup' component = {Signup} />
            <Route exact path='/create-post' component = {Post} />
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

export default App;
