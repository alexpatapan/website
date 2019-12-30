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

/*<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className="background-video">
<source src={video}/>
</video>*/


var video = 'https://cdn-b-east.streamable.com/video/mp4/c5dfs.mp4?token=iI9_fbxAf2_WsUna9YZQEQ&expires=1577674380';

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

