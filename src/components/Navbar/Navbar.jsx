import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Search from '../Search/Search'

import Logo from '../Logo/Logo';

export default function Navbar() {

  return (
    <div className='navbar'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor:" #34c94b" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Logo/>
          </IconButton>
          
          <Search/>
          <Box sx={{ flexGrow: 1 }} />
          <button 
          type="submit"
          color="inherit"
          style={{width:"150px",
                  height:"36px",
                  color:"#34c94b",
                  backgroundColor: "#121212",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500"

          }}>
            Give Feedback
            </button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
