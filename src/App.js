import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleList from './components/contacts.jsx';
import Background from './background.jpeg'; 
import Links from './components/links.js'
import Button from '@material-ui/core/Button';
import AboutMe from "./components/aboutme.jsx"; 
import backgroundgif from './bgif.mp4';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




var video2 = 'https://cdn-b-east.streamable.com/video/mp4/c5dfs.mp4?token=iI9_fbxAf2_WsUna9YZQEQ&expires=1577674380';
var video = 'https://assets.mixkit.co/videos/2124/2124-720.mp4';
document.title = 'Alex Patapan';

function App() {
  return (  
    
    <div className="App">
    
    <video id="myVideo" muted autoplay="true" loop className="background-video">
    <source src={video}/>
    <script>var vid = document.getElementById("myVideo");
    vid.defaultPlaybackRate = 0.5;</script>

    </video>
    


    <header className="Background">
        <Links />
      </header>
    </div>
  );
}




export default App;

