import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tmdbApi } from "../Component/Services/TMDB";
import currentGenresReducer from "../features/currentGenres";
import userReducer from '../features/auth'

export default configureStore({
    reducer: {
        [tmdbApi.reducerPath] : tmdbApi.reducer, 
        currentGenres : currentGenresReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(tmdbApi.middleware)
})