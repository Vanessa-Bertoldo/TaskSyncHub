export const CACHE_CONFIG = {
    LIST_TASKS                           :   "LIST_TASKS",
    DATA_LOGIN                           :   "DATA_LOGIN"

}

export const setListTask = (data) => {
    console.log("lista ", data);
    const dataString = JSON.stringify(data);
    return localStorage.setItem(CACHE_CONFIG.LIST_TASKS, dataString);
}

export const getListTask = () => {
    const storedData = localStorage.getItem(CACHE_CONFIG.LIST_TASKS);
    return storedData ? JSON.parse(storedData) : null;
}


export const getDataLogin = () => {
    const storedData =  localStorage.getItem(CACHE_CONFIG.DATA_LOGIN)
    return storedData ? JSON.parse(storedData) : null;
}
export const setDataLogin = (data) => {
    const dataString = JSON.stringify(data);
    return localStorage.setItem(CACHE_CONFIG.DATA_LOGIN, dataString)
}

export const getIdUser = () => {

}