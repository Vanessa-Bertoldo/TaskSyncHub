import { createSlice } from "@reduxjs/toolkit";
import { ckeckUser } from "../connection_api/connection/connAuth";

const initialState = {
   datalogin: null,
   dataTask: null
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
       checkLogin(state, action){
            state.datalogin = action.payload
       },
       dataTask(state, action){
         state.dataTask = action.payload
       }
    }
})
export const { checkLogin } = auth.actions
export default auth.reducer

export function ckeckLoginUser(dto){
   return async (dispatch) => {
      await dispatch(ckeckUser(dto))
   }
}

export function loadDataTask(dto){
   console.log("dto ", dto)
   return async (dispatch) => {
      await dispatch(auth.actions.dataTask(dto))
   }
}

export function reloadList(dto){
   return async (dispatch) => {
      
   }
}