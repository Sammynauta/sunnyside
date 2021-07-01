import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Clients from '../src/components/Clients';
import Cards from '../src/components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cards></Cards>
      <Clients></Clients>
      <Footer></Footer>
    </div>
  );
}

export default App;
