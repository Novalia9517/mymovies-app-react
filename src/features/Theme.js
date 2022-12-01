import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : 'theme',
    initialState : { theme : 'light'},
    reducers : {
        changeTheme(state){
            const color = state.theme === 'light' ? 'dark' : 'light'
            return {
                theme : color
            }
        }
    }
}) 

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer