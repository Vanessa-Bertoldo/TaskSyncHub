import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../connection_api/connection/connUser";

const initialState = {
  dataLogin: null,
  error: null,
};

const register = createSlice({
  name: "register",
  initialState,
  reducers: {
    checkCredentialsRegister: async (state, action) => {
        state.dataLogin = action.payload;
  },
}
});

export const { checkCredentialsRegister } = register.actions;
export default register.reducer;


export function dispatchDataRegister(data){
    return async (dispatch) => {
        await dispatch(registerUser(data))
    }
}
