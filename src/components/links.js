import React from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import AboutMe from "./aboutme.jsx"; 
import SimpleList from './contacts.jsx';
//import resumepdf from './resume.pdf';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//var pdf = resumepdf;

class Links extends React.Component {
  render() {
    return (
      <div className="links">
      <Router>
      <header className="App-header">
      <header className="topBar">
          <Button href="/"  >Home</Button>
          <Button href="/about" >About Me</Button>
          <Button href="/resume.pdf" >Resume</Button>
          <Button href="../../public/socials">Socials</Button>
          
      </header></header>
        <Switch>
        <Route path="/about">
          <header className="welcome"> <p></p>
          I'm studying Computer Science and Economics at The Univeristy of Queensland. <p></p>
          <header className="body-aboutme">
          I'm in my second last year of studying and I major in machine learning. I write a lot of Python, Java, and C. <br></br>
          Outside of coding, I love to play guitar.
          </header>
          </header>
        </Route>
        <Route path="/socials">
        <header className="App-header"><header className="socials"><SimpleList /></header></header>
        </Route>
        <Route path="/resume">
        </Route>
        <Route path="/">
          <header className="welcome"> 
            <p>Hi! I'm Alex.</p><small>I like to program stuff.</small>
          </header>
        </Route>
      </Switch>

      
      </Router>
      </div>


    );
  }
}

export default Links;