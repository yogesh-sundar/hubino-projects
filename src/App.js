import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Example from './Components/Example';
import Navbar from './Components/Navbar';
import Practice from './Components/Practice';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Example />
      <Practice />
      </BrowserRouter>
  );
}

export default App;
