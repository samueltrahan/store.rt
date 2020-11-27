import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import Featured from './components/Featured/Featured';
import Reason from './components/Reason/Reason';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Featured />
      <Reason />
      <Footer />
    </div>
  )
}
