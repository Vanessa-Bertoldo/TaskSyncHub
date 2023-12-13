import axios from "axios";

export function AxiosPost(url, dto) {
    return axios({
        method: 'POST',
        url: url,
        withCredentials: true,
        data: dto,
        headers: {
            'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            throw error;
        });  
}

export function AxiosGet(url) {
    return axios.get(url)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            throw error; 
        });
        
}

export const AxiosDelete = async (url, id) => {
    try {
        const response = await axios.delete(`${url}/${id}`);
        console.log('Dado deletado com sucesso:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar dado:', error);
        throw error;
    }
};

export async function updateData(url, data) {
    try {
      const response = await axios.put(url, data);
      console.log('Dados atualizados com sucesso:', response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
      throw error;
    }
}