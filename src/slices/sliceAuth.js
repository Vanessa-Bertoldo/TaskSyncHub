import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   datalogin: null
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
       checkLogin(state, action){
            state.datalogin = action.payload
       }
    }
})
export const { checkLogin } = auth.actions
export default auth.reducer