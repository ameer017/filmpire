import { Typography, Button } from '@mui/material'
import React from 'react'
import useStyles from './stylePage'


const Pagination = ({currentPage, totalPage, setPage}) => {
    const classes = useStyles()

    const handlePrev = () => {
        if(currentPage !== 1) {
            setPage((prevPage) => prevPage -1)
        }
    }
    const handleNext = () => {
        if(currentPage !== totalPage) {
            setPage((prevPage) => prevPage +1)
        }
    }

    if(totalPage === 0) return null

  return (
    <div className={classes.container}>
        <Button className={classes.button} onClick={handlePrev} variant='contained'
        color='primary' type='button'>
            Prev
        </Button>
        <Typography variant='h4' className={classes.pageName}>{currentPage}</Typography>
        <Button className={classes.buton} onClick={handleNext} variant='contained'
        color='primary' type='button'>
            Next
        </Button>
    </div>
  )
}

export default Pagination