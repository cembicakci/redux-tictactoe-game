import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: 'game',
    initialState:{ 
        items: ["deneme"]
    }
})

export default gameSlice.reducer