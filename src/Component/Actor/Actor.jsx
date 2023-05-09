// useParams to get actor id
// make a new redux call using redux toolkit query to get actor details
// research tmdb api docs...
// use newly created useGetActorHook to get actor info to the component
import React, {useState} from 'react'
import { Button, Grid, Box, CircularProgress, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { useGetActorsDetailQuery } from '../Services/TMDB'
import useStyles from './ActorStyle'

const Actor = () => {
  const classes = useStyles()
  const {id} = useParams()
  const navigate = useNavigate()
  const {data, isFetching, error} = useGetActorsDetailQuery(id)

  if(isFetching) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='6rem'/>
      </Box>
    )
  }

  if(error) {
    <Box display='flex' justifyContent='center'
    alignItems='center'>
      <Button variant='outlined' startIcon={<ArrowBack/>} onClick={() => navigate.goBack()} color='primary'>Go Back</Button>
    </Box>
  }
  return (
    <>
    <Grid container spacing='3'>
        <Grid item lg={5} xl={4}>
          {/* <img className={classes.image} src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`} alt='aaa' /> */}
          <img className={classes.image} src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`} alt='aaa' />
        </Grid>
    </Grid>
    </>
  )
}

export default Actor