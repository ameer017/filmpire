import React, {useEffect} from 'react'
import { Typography, Button, Box } from '@mui/material'
import { ExitToApp } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { userSelector } from '../../features/auth'
import { useGetListQuery } from '../Services/TMDB'
import Ratedfile from '../Ratedfile/Ratedfile'


const Profile = () => {
  const { user } = useSelector(userSelector);
  const {data: favoriteMovies, refetch: refetchFavorite} = useGetListQuery({listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1})
const {data: watchlistMovies, refetch: refetchWatchlist} = useGetListQuery({listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1})

useEffect(() => {
  refetchFavorite()
  refetchWatchlist()
},[])

  // const favouriteMovies = []
  const logout = () => {
      localStorage.clear();

      window.location.href ='/';
  }
  
  return (
      <Box>
          <Box display='flex' justifyContent='space-between'>
              <Typography variant="h4" gutterBottom>
              My Profile - {user.username}
              </Typography>
              <Button color='inherit' onClick={logout}>
                  Logout &nbsp; <ExitToApp />
              </Button>
          </Box>
          {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length
          ? <Typography variant="h5">Add favourite or watchlist some movie to see them here</Typography>
           :( 
           <Box>
              <Ratedfile title="Favorite Movies" data={favoriteMovies}/>
              <Ratedfile title="Watchlist" data={watchlistMovies}/>
          </Box>
          )}
      </Box>
  );
};

export default Profile;