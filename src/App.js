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
import Pic01 from './Assets/shoe01.jpg';
import Pic02 from './Assets/shoe02.jpg'
import Pic03 from './Assets/shoe03.jpg'
import Pic04 from './Assets/shoe04.jpg'
import Pic05 from './Assets/shoe05.jpg'
import Pic06 from './Assets/shoe06.jpg'
import Pic07 from './Assets/shoe07.jpg'
import Pic08 from './Assets/shoe08.jpg'
import Pic09 from './Assets/shoe09.jpg'

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
          <h1 className="product-heading">Products</h1>
          <div className="product-app">
          <Products image={Pic01} price="$150.00" />
          <Products image={Pic02} price="$150.00" />
          <Products image={Pic03} price="$59.99" />
          <Products image={Pic04} price="$120.00" />
          <Products image={Pic05} price="$160.00" />
          <Products image={Pic06} price="$90.00" />
          <Products image={Pic07} price="$150.00" />
          <Products image={Pic08} price="$80.00" />
          <Products image={Pic09} price="$120.00" />
          </div>
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
