import React from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import useStyles from './styleSide'

// the categories & demoCategories list is a saved database to testrun the code 
const Categories = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top Rated', value: 'top Rated'},
    {label: 'Upcoming', value: 'upcoming'}
]

const demoCategories = [
    {label: 'Comedy', value: 'comedy'},
    {label: 'Action', value: 'action'},
    {label: 'Horror', value: 'horror'},
    {label: 'Animation', value: 'animation'}
]

// links for logo -{red, blue}
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

// sidebar component installed in to the left side of the navbar

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
    const classes = useStyles()
  return (
    <>
        <Link to='/' className={classes.imageLink}>
            <img src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt='filmpire logo' className={classes.image} />
        </Link>
        
        {/* in-built divider form mui/material */}
        <Divider/>

        {/* List -- li */}
        <List>
            <ListSubheader>Categories</ListSubheader>
            {Categories.map(({label, value}) => (
               <Link key={value} className={classes.links} to='/'>
                    <ListItem onClick={() => {}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo} className={classes.genreImage} height={30}/>
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItem>
               </Link> 
            ))}
        </List>

        <Divider/>

        <List>
            <ListSubheader>Genres</ListSubheader>
            {demoCategories.map(({label, value}) => (
               <Link key={value} className={classes.links} to='/'>
                    <ListItem onClick={() => {}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo} className={classes.genreImage} height={30}/>
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItem>
               </Link> 
            ))}
        </List>
    </>
  )
}

export default Sidebar