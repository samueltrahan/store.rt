import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
import ProductDetails from './pages/ProductDetails/ProductDetails';
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
          <Products id={uuidv4()} image={Pic01} price={150} />
          <Products id={uuidv4()} image={Pic02} price={150} />
          <Products id={uuidv4()} image={Pic03} price={59} />
          <Products id={uuidv4()} image={Pic04} price={120} />
          <Products id={uuidv4()} image={Pic05} price={160} />
          <Products id={uuidv4()} image={Pic06} price={90} />
          <Products id={uuidv4()} image={Pic07} price={150} />
          <Products id={uuidv4()} image={Pic08} price={80} />
          <Products id={uuidv4()} image={Pic09} price={120} />
          </div>
          <Footer />
      </div>
      }>
      </Route>
      <Route exact path="/services" render={() => 
      <div>
        <h1 className="service-heading">Services</h1>
          <Services path="/helping" title="Helping People" content="What do you offer to people that can help them? Why should they want your services, and what sets you apart from others that do the same thing?"/>
          <Services path="/unqiue" title="Uniqueness" content="Is there something that is unique about your service that other businesses don't have?  Let's try to convey that."/>
          <Services path="/exceptional" title="Exceptional Services" content="Are your services a cut above the rest?  We want to show the customer that in this section so that it is undeniable that you are the right person for the job."/>
          <Services path="/special" title="Special" content="If you are running specials on services, or feel that you offer a special aspect to your service, let's showcase that here."/>
          <Footer />
      </div>
      }>
      </Route>
      <Route exact path="/about" render={() => 
      <div>
          <About />
          <Footer />
      </div>
      }>
      </Route>
      <Route exact path="/contact" render={() => 
      <div>
          <Contact />
          <Footer />
      </div>
      }>
      </Route>
      <Route path='/products/:id' render={() => {
        <ProductDetails />
      }}>

      </Route>
    </Router>
  )
}
