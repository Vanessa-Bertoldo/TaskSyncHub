import { DB_CONNECTION } from "../constantsAPI"
import { AxiosPost } from "../requestsAPI"

export const ckeckUser = (dto) => async (dispatch) => {
    console.log("data ", dto.password)
    try{
        const response = await AxiosPost(DB_CONNECTION.LINK_SERVER_AUTH_LOGIN, dto)
        console.log("response ", response)
        return response
    } catch(error) {
      return error
    }
  }