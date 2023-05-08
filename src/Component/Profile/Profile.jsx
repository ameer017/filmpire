import React, {useEffect} from 'react'
import { Typography, Button, Box } from '@mui/material'
import { ExitToApp, Favorite } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { userSelector } from '../../features/auth'

const Profile = () => {
  const {user} = useSelector(userSelector)
  const logout = () => {
    localStorage.clear()
    window.location.href ='/'
  }
  return (
    // <div>
    // Profile - {user.username} | {user.id} | {user.iso_3166_1}
    // </div>
    <Box>
      <Box 
      display='flex' justifyContent='space-between'>
          <Typography variant='h4' gutterBottom>
              My Profile
          </Typography>

          <Button color='inherit' onClick={logout}>
            Logout &nbsp; <ExitToApp />
          </Button>
      </Box>
      {!Favorite.length ? (
        <Typography variant='h5'>
          Add favorite movies or watchlist some movies to see here...
        </Typography>
      ) : (
        <Box>Favorite Movies</Box>
      )}
    </Box>
  )
}

export default Profile