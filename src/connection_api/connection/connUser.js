import { DB_CONNECTION } from "../constantsAPI"
import { AxiosPost } from "../requestsAPI"

export const registerUser = (dto) => async (dispatch) => {
    try{
        const data = {
            name:       dto.name,
            email:      dto.email,
            password:   dto.password
        }
        const response = await AxiosPost(DB_CONNECTION.LINK_SERVER_AUTH, data)
        console.log("response ", response)
        if(response.status === 200){
            console.log("sucesso register")
        }
        return response.status
    } catch(error) {
        return error
    }
}

/**import { DB_CONNECTION } from "../dbConnection";
import { AxiosPost } from "../constantsConnection";
import { getDataFicha } from "./connFicha";

export const loginAsync = (dto) => async (dispatch) => {
  try {
    const data = {
      user: dto.user,
      password: dto.password
    }
    const response = await AxiosPost(DB_CONNECTION.LINK_SERVER_AUTH, data);
    console.log("response ", response.status)
    if(response.status === 200){
      await dispatch(getDataFicha())
    }
    console.log("dispachei")
    return response.status
  } catch (error) {
    console.log("error ", error)
    return error.status
  }
}; */