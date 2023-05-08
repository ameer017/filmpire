import React from 'react'
import { Grid } from '@mui/material'
import useStyle from './styleList'
import {Movie} from '..'


export default function Movielist({movies, numberOfMovies}) {

    const classes = useStyle()
  return (
    <Grid container className={classes.moviesContainer}>
        {movies.results.slice(0, numberOfMovies).map((movie, i) => (
            <Movie key={i} movie = {movie} i={i}/>
        ))}
    </Grid>
  )
}
