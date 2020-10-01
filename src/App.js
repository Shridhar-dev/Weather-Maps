import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mapper from "./Mapper"
import Header from './Header';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App"> 
    <Navbar />
      <Header />
      <Mapper id="mapblock"/>
      <br/>
      
    </div>
  );
}

export default App;
