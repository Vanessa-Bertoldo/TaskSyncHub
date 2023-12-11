import { loadDataTask } from "../../slices/sliceAuth"
import { setDataLogin, setListTask } from "../../utils/cacheConfig"
import { DB_CONNECTION } from "../constantsAPI"
import { AxiosPost } from "../requestsAPI"

export const ckeckUser = (dto) => async (dispatch) => {
    try{
        const response = await AxiosPost(DB_CONNECTION.LINK_SERVER_AUTH_LOGIN, dto)
        if(response.data !== null){
          console.log("resoonse  ",response)
          await dispatch(loadDataTask(response.data.tasks))
          await setListTask(response.data.tasks)
          
        }
        return response
    } catch(error) {
      return error
    }
  }