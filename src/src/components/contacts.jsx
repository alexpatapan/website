import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as GitHubLogo } from '../github.svg';
import { ReactComponent as LinkedInLogo } from '../linkedin.svg';
import { grey } from '@material-ui/core/colors';
import { height } from '@material-ui/system';
import '../App.css';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 190,
      background: 'rgba(204, 204, 204, 0.86)',
      'border-radius': '15px',
      'margin-right':'190px',
      
    },
  }));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
  
  export default function SimpleList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <List disablePadding="true" component="nav" aria-label="main mailbox folders">
        
        <ListItem button component="a" href="http://github.com/alexpatapan">
        <header className="contactsbox">
            <ListItemIcon>
              <GitHubLogo />
            </ListItemIcon></header>
            
            <ListItemText primary="GitHub" />
            </ListItem>
          
          <ListItem button component="a" href="https://www.linkedin.com/in/alex-patapan-33279016a/">
          <header className="contactsbox"><ListItemIcon>
              <LinkedInLogo />
            </ListItemIcon></header>
            <ListItemText primary="LinkedIn" />
          </ListItem>
        
          <ListItem button component="a" href="mailto:alexpatapan@gmail.com" alignItems="flex-start">
          <header className="contactsbox"><ListItemIcon>
              <DraftsIcon style={{ color: grey[900] }}/>
            </ListItemIcon></header>
            <ListItemText primary="Email" />
          </ListItem>
        </List>
        <Divider />
      </div>
    );
  }