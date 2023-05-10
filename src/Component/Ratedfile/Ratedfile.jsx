import React from 'react'
import { Typography, Box } from '@mui/material'
import useStyles from './Ratedstyle'
import Movie from '../Movie/Movie'

const Ratedfile = ({title, data}) => {
    const classes = useStyles()

    return (
    <>
        <Box>
            <Typography variant='h5' gutterBottom>
                {title}
            </Typography>
            <Box display='flex' flexWrap='wrap' classes={classes.container}>
                {data?.results?.map((movie, i) => (

                    <Movie key={movie.id} movie={movie} i={i} />
                ))}
            </Box>
        </Box>
    </>
  )
}

export default Ratedfile