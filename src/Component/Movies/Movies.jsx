import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../Services/TMDB';
import { Movielist } from '..';

const Movies = () => {
    const {data, error, isFetching } = useGetMoviesQuery();
    console.log(data);
    
    if(isFetching) {
      return (
        <Box 
        display='flex'>
          <CircularProgress size='4rem' />
        </Box>
      )
    }
    if(!data.results.length) {
      return(
        <Box display='flex' alignItems='center'
        mt='20px'>
          <Typography variant='h4'>
            No match found  <br />
            Search for another movie
          </Typography>
        </Box>
      )
    }
    if (error) {
      return (
        <p>An error has occured</p>
      )
    }

  return (
    <div>
        <Movielist movies={data}/>
    </div>
  )
}

export default Movies