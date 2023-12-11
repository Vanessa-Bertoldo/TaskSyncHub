export const CACHE_CONFIG = {
    LIST_TASKS                           :   "LIST_TASKS",
    DATA_LOGIN                           :   "DATA_LOGIN"

}

export const getListTask = () => {
    return localStorage.getItem(CACHE_CONFIG.LIST_TASKS)
}
export const setListTask = (data) => {
    console.log("lista ", data)
    return localStorage.setItem(CACHE_CONFIG.LIST_TASKS, data)
}

export const getDataLogin = () => {
    return localStorage.getItem(CACHE_CONFIG.DATA_LOGIN)
}
export const setDataLogin = (data) => {
    console.log("login receive ", data)
    return localStorage.setItem(CACHE_CONFIG.DATA_LOGIN, data)
}