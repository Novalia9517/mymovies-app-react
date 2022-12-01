import { configureStore } from "@reduxjs/toolkit";

import FavoriteSliceReducer from './features/Slice'
import ThemeReducer from './features/Theme'

export default configureStore({
    reducer : {
       favorites : FavoriteSliceReducer,
       theme : ThemeReducer
    }
})