import React from 'react'
import './App.css';
import Craousel from './component/craousel/craousel';
import Nav from './component/navbar/navbar';
import Home from './screeen/home/home';
import Footer from './screeen/footer/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './screeen/about us/aboutus';
import Dish from './screeen/dishes/dish';
import Contact from './screeen/contact/contact';

function App() {

  return (

 
    <Router >
        <Switch>
        <Route exact render={(props) =>  <Craousel {...props} />} path="/" />
        <Route exact render={(props) =>  <Home {...props} />} path="/home" />
     
        <Route exact render={(props) =>  <About {...props} />} path="/about" />
        <Route exact render={(props) =>  <Dish {...props} />} path="/dish" />
        <Route exact render={(props) =>  <Contact {...props} />} path="/contact" />

        <Footer/>
        </Switch>
       </Router>
     

  
  )}
  


export default App;
