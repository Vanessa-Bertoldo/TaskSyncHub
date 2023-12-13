import { createSlice } from "@reduxjs/toolkit";
import { getDataLogin } from "../utils/cacheConfig";
import { formatDate } from "../utils/formatDate";
import { insertDataTask } from "../connection_api/connection/connTasks";

const initialState = {
    open: false,
    status: 0,
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
        },
        updateStatus(state, action){
            state.status = action.payload
        }
    }
})
export const { openDialogUpdate, closeDialog } = dialogUpdate.actions
export default dialogUpdate.reducer

export function sendStatus(status){
    return async (dispatch) => {
        await dispatch(dialogUpdate.actions.updateStatus(status))
    }
}

export function insertTask(dto, status){
    return async (dispatch) => {
        const data = {
            title: dto.title, 
            description: dto.description, 
            status: status, 
            date_initial: formatDate(new Date()), 
            date_final: formatDate(new Date()), 
            user_id: getDataLogin().id
        }
        await dispatch(insertDataTask(data))
    }
}