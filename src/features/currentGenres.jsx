import { createSlice } from "@reduxjs/toolkit";

export const genreOrCateg = createSlice({
    name: 'genreOrCateg',
    initialState: {
        genreIdOrCategoryName: '',
        page: 1,
        searchQuery: ''
    },
    reducers: {
        selectGenre: (state, action) => {
            state.genreIdOrCategoryName = action.payload;
            state.searchQuery = ''
        },

        searchMovie: (state, action) => {
            state.searchQuery = action.payload;
            
        }
    }
})

export const {selectGenre, searchMovie} = genreOrCateg.actions
export default genreOrCateg.reducer