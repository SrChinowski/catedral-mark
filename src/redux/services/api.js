import axios from "axios";

const api = axios.create({
    baseURL: 'https://test-marc-biblio-api.herokuapp.com/api'
})

// const UNAUTH_STATUS = 401;
export const Interceptor = (store) => {

    api.interceptors.request.use((request) => {
        const {token} = store.getState().app;

        if(token) request.headers.Authorization = `${token}`
        return request;     
    })
}

export default api;