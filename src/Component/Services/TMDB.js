import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbApiKey = import.meta.env.VITE_APP_TMDB_KEY;
// const page = 1

// https://api.themoviedb.org/3/movie/550?api_key=2cd2ee8a6c414ba3f19aaca683ef0c64
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (builder) => ({

        // // get movies by genres
        // https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
        getGenres: builder.query({
            query: () => `genre/movie/list?&api_key=${tmdbApiKey}`
        }),


        // get movies by types
        getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page, searchQuery }) => {
                // Get Movies by Search
                if (searchQuery) {
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
                }
 
                // Get Movies by Category
                if (
                    genreIdOrCategoryName &&
                    typeof genreIdOrCategoryName === "string"
                ) {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                }
                // Get movies by Genre
                if (
                    genreIdOrCategoryName &&
                    typeof genreIdOrCategoryName === "number"
                ) {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
                }
                // Get popular Movies
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
        }),

        // Get Movies 
        getMovie : builder.query({
            query:(id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
        }),

        // Get User Specific Lists
        getRecommendations: builder.query({
            query: ({movie_id, list}) => 
            `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
        }),

    })
})

export const {
    useGetMoviesQuery,
    useGetGenresQuery,
    useGetMovieQuery,
    useGetRecommendationsQuery
} = tmdbApi