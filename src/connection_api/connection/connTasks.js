import { AlertSucess } from "../../utils/alert/alertSucess"
import { setListTask } from "../../utils/cacheConfig"
import { DB_CONNECTION } from "../constantsAPI"
import { AxiosDelete, AxiosPost } from "../requestsAPI"

export const deleteTask = (id) => async (dispatch) => {
    try{
        const response = await AxiosDelete(DB_CONNECTION.LINK_SERVER_TASKS, id)
        if(response.data !== null){
            if(response.status === 200){
                if(response.data !== null){
                    await setListTask(response.data)
                }
                await AlertSucess({title: "Sucesso", text: "Dados excluídos com sucesso", icon: "success"})
            }
            
        }
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
            window.location.reload();
        }
        
        return response
    } catch(error) {
        return error
    }
}