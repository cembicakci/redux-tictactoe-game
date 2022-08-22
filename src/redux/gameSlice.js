import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        items: ["", "", "", "", "", "", "", "", ""],
        cursor: false
    },
    reducers: {
        changeCursor: (state) => {
            state.cursor = !state.cursor
        },
        changeItems: (state) => {
            state.items = [...state.items]
        }
    }
})

export const { changeCursor, changeItems } = gameSlice.actions
export default gameSlice.reducer