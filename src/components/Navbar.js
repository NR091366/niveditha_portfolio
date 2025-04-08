import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, IconButton, Stack, Box, Menu, MenuList, MenuItem} from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Navbar() {

  return <AppBar position='static' style={{height:'3.5rem'}}>
    <Toolbar style={{fontSize:'1rem'}}>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
    <AcUnitIcon></AcUnitIcon>
    </IconButton>
    <Typography color='inherit' component='div' sx={{flexGrow:1}}>
     <Link to='/intro' className='menuItem'>Welcome</Link>
    </Typography>
    <Box direction='row' spacing={4}>
      <Link to='/intro' className='menuItem'>Home</Link>
      <Link to='/about' className='menuItem'>About Me</Link>
      {/* <Link to='/skills' className='menuItem'>Skills</Link> */}
      <Link to='/projects' className='menuItem'>Projects</Link>
      {/* <Link to='/resume' className='menuItem'>DownLoad Resume</Link> */}
      <Link to='/contact' className='menuItem'>Contact Me</Link>
    </Box>
    

    </Toolbar>
  </AppBar>
}

export default Navbar
