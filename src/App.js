import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import Featured from './components/Featured/Featured';
import Reason from './components/Reason/Reason';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" render={() => 
      <div>
        <Banner />
        <Featured />
        <Reason />
        <Footer />
      </div>
      }>
      </Route>
      <Route exact path="/products" render={() => 
      <div>
          <Products />
      </div>
      }>
      </Route>
      <Route exact path="/services" render={() => 
      <div>
          <Services />
      </div>
      }>
      </Route>
      <Route exact path="/about" render={() => 
      <div>
          <About />
      </div>
      }>
      </Route>
      <Route exact path="/contact" render={() => 
      <div>
          <Contact />
      </div>
      }>
      </Route>
    </Router>
  )
}
