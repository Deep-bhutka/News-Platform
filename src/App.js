import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


const App =()=> {
  const[progress,setProgress]=useState(0) 
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key='general' pagesize={6} country='in' category='general'/></Route>
        </Switch>
      </Router>
      </div>
    )
  }

export default App;

