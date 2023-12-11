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

