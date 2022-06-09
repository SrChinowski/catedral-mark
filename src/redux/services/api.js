import axios from "axios";

const api = axios.create({
    baseURL: 'https://marc-biblio-api.herokuapp.com/api'
})

// const UNAUTH_STATUS = 401;
export const Interceptor = (store) => {

    api.interceptors.request.use((request) => {
        const {token} = store.getState().user;

        if(token) request.headers.Authorization = `Bearer ${token}`
    })

    api.interceptors.response.use((response) => response,
    (error) => {
        if(error) {
            store.dispatch({type: 'APP/LOGOUT'});
            console.log('TOKEN EXPIRADO O INVALIDO')
        }
        return Promise.reject(error)
    })
}

export default api;