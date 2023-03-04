import api from "./api";

//Respuesta esperada: 
// {
//     "token": String,
//     "first": Bool
// }
export const appLoginService = (email, password) => api.post('users/login', {
    username: email,
    password: password
}).then(({data}) => data)