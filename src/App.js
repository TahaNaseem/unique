import React from 'react'
import './App.css';
import Craousel from './component/craousel/craousel';
import Nav from './component/navbar/navbar';
import Home from './screeen/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './screeen/about us/aboutus';

function App() {

  return (

 
    <Router >
        <Switch>
        <Route  exact path="/" component={Craousel} />
        <Route  exact path="/home" component={Home} />
        <Route  exact path="/home1" component={Home} />
        <Route  exact path="/about" component={About} />
        </Switch>
       </Router>
     

  
  )}
  


export default App;
