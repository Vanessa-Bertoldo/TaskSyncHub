import { createSlice } from "@reduxjs/toolkit";
import { getDataLogin } from "../utils/cacheConfig";
import { formatDate } from "../utils/formatDate";
import { insertDataTask, updateTask } from "../connection_api/connection/connTasks";

const initialState = {
    open: false,
    status: 0,
    dataTask: null
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
        },
        updateDataTask(state, action){
            state.dataTask = action.payload
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

export function loadDataTask(data){
    return async (dispatch) => {
        console.log("data ", data)
        await dispatch(dialogUpdate.actions.updateDataTask(data))
        await dispatch(openDialogUpdate())
      
    } 
}

export function emptyData(){
    return async (dispatch) => {
        await dispatch(dialogUpdate.actions.updateDataTask(null))
    }
}

export function updateStatusTasks(dto, dto2){
    return async (dispatch) => {
        //console.log("dataUpdate ", dto)
        //console.log("dataUpdate222 ", dto2)
        //console.log("dta log ", getDataLogin())
        const id = dto2 && dto2.id !== null && dto2.id !== "" ? dto2.id : dto.id
        const status =  dto2 && dto2.status !== null ? dto2.status : dto.status
        const newData = {
            id: id,
            title: dto.title,
            description: dto.description,
            status: status,
            user_id: getDataLogin().id
        }
        
       await dispatch(updateTask(newData))
    }
}