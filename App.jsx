import React from 'react';
import './index.css'
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import useStyles from './src/Component/styles';
import {MovieInfo, Actor, Profile, Navbar, Movies} from './src/Component/index'

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Routes>
              <Route exact path='/' element={<Movies />} />
              <Route exact path='/actors/:id' element={<Actor />} />
              <Route exact path='/movie/:id' element={<MovieInfo />} />
              <Route exact path='/profile/:id' element={<Profile />} />
            </Routes>
        </main>

    </div>
  )
}

export default App