import { createSlice } from "@reduxjs/toolkit";

let initialState = []

const FavoriteSlice = createSlice({
    name : 'favorite',
    initialState,
    reducers : {
        addFavorite(state, action){
            const id = action.payload.movieId
            let check = false
            state.map(item => {if(item.id === id.id){check = true}})
            !check && state.push(id)
        },
        deleteFavorite(state, action){
            state =  state.filter(item => item.id !== action.payload.movieId )
            return state
        }
    }
})

export const { addFavorite, deleteFavorite } = FavoriteSlice.actions
export default FavoriteSlice.reducer