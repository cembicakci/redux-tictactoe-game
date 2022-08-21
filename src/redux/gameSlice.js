import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        items: [],
        cursor: false
    },
    reducers: {
        changeCursor: (state) => {
            state.cursor = !state.cursor
        }
    }
})

export const { changeCursor } = gameSlice.actions
export default gameSlice.reducer