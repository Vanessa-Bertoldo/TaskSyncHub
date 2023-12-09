import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
}

const dialogUpdate = createSlice({
    name: "dialogUpdate",
    initialState,
    reducers: {
        openDialogUpdate(state){
            state.open = true;
        },
        closeDialog(state){
            state.open = false;
        }
    }
})
export const { openDialogUpdate, closeDialog } = dialogUpdate.actions
export default dialogUpdate.reducer