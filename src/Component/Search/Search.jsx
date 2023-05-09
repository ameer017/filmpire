import React, {useState, useEffect} from 'react'
import { TextField, InputAdornment, useMediaQuery } from '@mui/material'
import {Search as SearchIcon} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useStyle from './stylesearch'
import { searchMovie } from '../../features/currentGenres'



const Search = () => {
    const isMobile = useMediaQuery("(max-width: 600px)");
   const classes = useStyle()
   const [query, setQuery] = useState()
   const dispatch = useDispatch();

   const handleKeyPress = (event) => {

       if(event.key === 'Enter') {
           dispatch(searchMovie(query))
       }
   }
   if (location.pathname !== '/') return null;


 return (
    <>
        {isMobile ? (
            <div></div>
        ) :
        (
            <div className={classes.searchContainer}>
                <TextField
                onKeyPress={handleKeyPress}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                variant='standard'
                
                InputProps={{
                    className: classes.input,
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon/>
                        </InputAdornment>
                    )
                }}
                />
            </div>

        )}
    </>
 )
}

export default Search