import React from 'react'
import { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styleSide';
import { useGetGenresQuery, useGetMoviesQuery } from '../Services/TMDB';
import  genresIcons from '../../assets/genres'
import { useSelector, useDispatch } from 'react-redux';
import { selectGenre } from '../../features/currentGenres';

// the categories  list is a saved database to testrun the code 
const Categories = [
    {label: 'Popular', value: 'popular'},
    {label: 'Upcoming', value: 'upcoming'},
    {label: 'Top Rated', value: 'top Rated'}
]

const redLogo =
   "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const blueLogo =
   "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const Sidebar = ({ setMobileOpen }) => {
   const { genreIdOrCategoryName } = useSelector((state) => state.currentGenres);
   const theme = useTheme();
   const classes = useStyles();
   const { data, isFetching } = useGetGenresQuery();
   const dispatch = useDispatch();

   useEffect(() => {
       setMobileOpen(false);
   }, [genreIdOrCategoryName]);

   return (
       <>
           <Link to="/" className={classes.imageLink}>
               <img
                   className={classes.image}
                   src={theme.palette.mode === "light" ? redLogo : blueLogo}
                   alt="Filmpire Logo"
               />
           </Link>
           <Divider />
           <List>
               <ListSubheader>Categories</ListSubheader>
               {Categories.map(({ label, value }) => (
                   <Link key={value} className={classes.links} to="/">
                       <ListItem
                           button
                           onClick={() =>
                               dispatch(selectGenre(value))
                           }
                       >
                           <ListItemIcon>
                               <img
                                   src={genresIcons[label.toLowerCase()]}
                                   className={classes.genreImage}
                                   height={30}
                               />
                           </ListItemIcon>
                           <ListItemText primary={label} />
                       </ListItem>
                   </Link>
               ))}
           </List>
           <Divider />
           <List>
               <ListSubheader>Genres</ListSubheader>
               {isFetching ? (
                   <Box display="flex" justifyContent="center">
                       <CircularProgress />
                   </Box>
               ) : (
                   data.genres.map(({ name, id }) => (
                       <Link key={name} className={classes.links} to="/">
                           <ListItem
                               button
                               onClick={() =>
                                   dispatch(selectGenre(id))
                               }
                           >
                               <ListItemIcon>
                                   <img
                                       src={genresIcons [name.toLowerCase()]}
                                       className={classes.genreImage}
                                       height={30}
                                   />
                               </ListItemIcon>
                               <ListItemText primary={name} />
                           </ListItem>
                       </Link>
                   ))
               )}
           </List>
       </>
   );
};

export default Sidebar;