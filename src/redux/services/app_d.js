import api from "./api";

//Respuesta esperada: 
// {
//     "token": String,
//     "first": Bool
// }
export const appLoginService = (email, password) => api.post('users/login', {
    email: "example@email.com",
    password: "password"
}).then(({token}) => token)