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
        return response.status
    } catch(error) {
        return error
    }
}

