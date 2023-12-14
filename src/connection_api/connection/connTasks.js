import { AlertSucess } from "../../utils/alert/alertSucess"
import { setListTask } from "../../utils/cacheConfig"
import { refresh } from "../../utils/refresh"
import { DB_CONNECTION } from "../constantsAPI"
import { AxiosDelete, AxiosPost, updateData } from "../requestsAPI"

export const deleteTask = (id) => async (dispatch) => {
    try{
        const response = await AxiosDelete(DB_CONNECTION.LINK_SERVER_TASKS, id)
        if(response.data !== null){
            if(response.status === 200){
                console.log("entrei no if")
                if(response.data !== null){
                    await setListTask(response.data)
                    console.log("entrei no if")
                }
            }
            
        }
        return response
    } catch(error) {
        return error
    }
}

export const insertDataTask = (dto) => async (dispatch) => {
    try{
        const response = await AxiosPost(DB_CONNECTION.LINK_SERVER_TASKS, dto)
        console.log("response ", response)
        if(response.status === 200){
            await setListTask(response.data)
            await AlertSucess({title: "Sucesso", text: "Dados salvos com sucesso", icon: "success"})
            refresh()
        }
        
        return response
    } catch(error) {
        return error
    }
}

export const updateTask = (dto) => async (dispatch) => {
    try{
        console.log("new dat" , dto)
        const response = await updateData(DB_CONNECTION.LINK_SERVER_TASKS, dto)
        console.log("response ", response)
        if(response.status === 200){
            console.log("entrada if")
            await setListTask(response.data)
            await AlertSucess({title: "Sucesso", text: "Dados salvos com sucesso", icon: "success"})
            refresh()
        }
        return response
    } catch(error) {
        return error
    }
}