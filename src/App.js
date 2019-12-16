import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleList from './components/contacts.jsx';
import Background from './background.jpeg'; 
import Links from './components/links.js'
import Button from '@material-ui/core/Button';
import AboutMe from "./components/aboutme.jsx"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

document.title = 'Alex Patapan';

function App() {
  return (  
    
    <div className="App">
    <header className="Background">
        <Links />
      </header>
    </div>
  );
}

export default App;

