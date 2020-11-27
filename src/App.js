import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import Featured from './components/Featured/Featured';

export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Featured />
    </div>
  )
}
