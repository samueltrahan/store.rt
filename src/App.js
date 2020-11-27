import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import Featured from './components/Featured/Featured';
import Reason from './components/Reason/Reason';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';

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
    </Router>
  )
}
