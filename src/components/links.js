import React from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import AboutMe from "./aboutme.jsx"; 
import SimpleList from './contacts.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import resume from '../resume.jpeg';

class Links extends React.Component {
  render() {
    return (
      <div className="links">
      <Router>
      <header className="App-header">
      <header className="topBar">
          <Button href="/" >Home</Button>
          <Button href="/about">About Me</Button>
          <Button href="/resume">Resume</Button>
          <Button href="/socials">Socials</Button>
          
          </header></header>
        <Switch>
        <Route path="/about">
          <header className="welcome"> <p></p>
          I'm studying CS and Economics at The Univeristy of Queensland. <p></p>
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
        <header className="App-header"><header className="resume"><p></p>
          Software engineer at FuelzFoods Pty Ltd <font size="2">(Dec 2019 - Current)</font>
          <header className="body-aboutme">I write backend software to solve optimisation issues in the supply chain process.</header>
          <p></p>Data Analyst at Kros Holdings Pty Ltd <font size="2">(Nov 2018 - Feb 2019)</font>
          <header className="body-aboutme">Involved the analysis of financial data to identify business growth trends.</header>
          
          <br></br><br></br><p></p><p></p> I currently hold a GPA of 6.5/7.0 and have recieved two Dean's commendations for Academic Excellence.
          <p></p>I am also a recognised Scholar of the Faculty of Engineering at UQ.</header>
          </header>
          

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