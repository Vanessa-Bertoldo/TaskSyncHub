import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open: false
}

const screenLoader = createSlice({
    name: "screenLoader",
    initialState,
    reducers: {
        openScreenLoader(state){
            state.open = true;
        },
        closedScreenLoader(state){
            state.open = false;
        },
    }
})

export const { openScreenLoader, closedScreenLoader } = screenLoader.actions;
export default screenLoader.reducer;