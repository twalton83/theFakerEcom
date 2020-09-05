import React from 'react';
import Navbar from './Navbar'
import './App.css';
import Welcome from './Welcome'
import './tailwind.output.css';

const App = () => (
  <div className = "App">
    <Navbar></Navbar>
    <Welcome/>
  </div>
);


export default App;
