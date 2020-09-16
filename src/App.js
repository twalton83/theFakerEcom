import React from 'react';
import Navbar from './Navbar'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Welcome from './Welcome'
import Shop from './Shop'
import Blog from './Blog'
import './tailwind.output.css';

const CartCountDisplay = React.createContext(null)

const App = () => (
  <div className = "App">
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" render={()=>  <Welcome/>}>
        <Welcome/>
      </Route>
      <Route exact path = "/shop" render={()=> <Shop/>}>
        <Shop/>
      </Route>
      <Route exact path = "/blog" render={()=> <Shop/>}>
        <Blog/>
      </Route>

    </Switch>
   
   
  </div>
);


export default App;
