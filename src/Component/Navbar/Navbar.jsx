import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import useStyles from './styleNav'
import { useTheme } from '@mui/material/styles';

import { Sidebar } from '..'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 600px)')
  const theme = useTheme();
  const isAuthenticated = 'true';
  return (
    <>
      {/* Appbar containing the navbar and sidebar elements */}
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
          color='inherit'
          edge='start'
          styles={{outline: 'none'}}
          onClick={() => {setMobileOpen((prevMobileOpen) => !prevMobileOpen)}}
          className={classes.menuBtn}
          >
          {/* menu icon for mobile screen usage */}
            <Menu />
          </IconButton>
        )}

          {/* to switch between themes  */}
        <IconButton
          className={classes.icon}
          color='inherit'
          sx={{ml: 1}} onClick={() => {}}>
          {theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/>}
        </IconButton>
          
          {/* search area */}
        {!isMobile && 'Search...'}
       
          {/* profile area  */}
        <div>
          {!isAuthenticated ? (
            <Button color='inherit' onClick={() => {}}>
              Login &nbsp; <AccountCircle/>
            </Button>) : (
              <Button color='inherit' component= {Link} to='/profile/:id' className={classes.linkBtn} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{width: '30', height: '30'}} alt='profile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWvXdcjNuTkrkDCYKZRtWwZ-emiiDJdP6sUb7VRshRA&s'/>
              </Button> 
          )}
        </div>

        {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>

        {/* sidebar element */}
      <div>
        <nav className={classes.drawer}>
        {/* ternary operator to check for mobile media query */}
          {isMobile ? (
            <Drawer
              variant='temporary'
              anchor='bottom'
              open= {mobileOpen}
              onClose={() => {setMobileOpen((prevMobileOpen) => !prevMobileOpen)}}
              className={classes.drawerBackground}
              classes={{paper: classes.drawerPaper}}
              ModalProps={{keepMounted: true}}
            >
              <Sidebar setMobileOpen={setMobileOpen}/>
            </Drawer>
          ) : (
            <Drawer classes={{paper: classes.drawerPaper}} variant='permanent' open>
                <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  )
}

export default Navbar