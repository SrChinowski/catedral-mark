import { parseJwt } from "../../utils/helpers";
import Status from "../../utils/status";
import { Write } from "../../utils/write";
import { AppSchema } from "../schema";
import { appLoginService } from "../services/app_d";
import { createUserService, deleteUsersService, disableUserdervice, getAllusersService, get_all_rolesService, get_user_signupService, updateUserService, userInfoService } from "../services/user_d";

const PREFIX = 'APP';
const SET_VALUE = 'SET_VALUE';
const initialState = AppSchema;

const App = Write({ reducer : 'app'})
const User = Write({ reducer : 'user'})


//Actions
export const appLogin = (email, password) => (dispatch, getState) => {
    const appLogin = Status({reducer: 'app', status: 'GET_APP_LOGIN'});

    dispatch(appLogin.startFetch())

    return appLoginService(email, password)
        .then(({token, first, error}) => {
            if(error){
                console.log('ERROR EN SERVICIO')
                dispatch(appLogin.stopFetch())
            }
            else{
                const {user} = parseJwt(token);

                dispatch(User.setValue('', {
                    username: user.username,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    firstTime: user.firstTime,
                    id: user._id
                },'root'))

                dispatch(App.setValue('', {
                    token: token
                },'root'))

                dispatch(open_notification("Info de usuario", "La informacion se descargo correctamente"))

                localStorage.setItem('catedralToken', token)
                dispatch(appLogin.stopFetch())
            }
        }).catch((e)=> {
            dispatch(appLogin.stopFetch(false, {error: getCustomError(e.response.data.error)}))
        }) 
} 

export const getAllUsers = () => (dispatch, getState) => { //ONLY GOD/ADMIN

    const getAllUsers = Status({reducer: 'app', status: 'GET_USERS_ALL'});

    dispatch(getAllUsers.startFetch());

    return getAllusersService()
        .then(({n_users, users}) => {
            dispatch(App.setValue('', {
                users_list: users
            },'root'))
            dispatch(getAllUsers.stopFetch())
        })
        .catch((e) => {
            dispatch(getAllUsers.stopFetch(false, {error: 'Error al obtener lista de usuarios'}))
            console.log('[ getAllUsers ]', e.response.data.error)   
        })

}
// DeleteUsers
export const deleteUsers = (id = "", setShowDialog) => (dispatch, getState) => { //ONLY GOD/ADMIN

    const deleteUsers = Status({reducer: 'app', status: 'DELETE_USERS'});

    dispatch(deleteUsers.startFetch());

    return deleteUsersService(id)
        .then(({n_users, users}) => {
            setShowDialog(false);
            dispatch(getAllUsers());
            dispatch(deleteUsers.stopFetch())
            dispatch(open_notification("Usuario eliminado", "El usuario se elimino correctamente"))
        })
        .catch((e) => {
            dispatch(deleteUsers.stopFetch(false, {error: 'Error al elimiar usuario'}))
            console.log('[ deleteUsers ]', e)   
        })

}

//UpdateUser
export const UpdateUser = (id, userInfo) => (dispatch, getState) => { //ONLY GOD/ADMIN

    const UpdateUser = Status({reducer: 'app', status: 'UPDATE_USERS'});

    dispatch(UpdateUser.startFetch());

    return updateUserService(id, userInfo)
        .then((r) => {
            console.log(r)
            dispatch(UpdateUser.stopFetch())
            dispatch(open_notification("Usuario actualizado", "El usuario se actualizo correctamente"))

        })
        .catch((e) => {
            dispatch(UpdateUser.stopFetch(false, {error: 'Error al actualizar lista de usuarios'}))
            console.log('[ UpdateUser ]', e.response.data.error)   
        })

}

//DisableUser
export const DisableUser = (id) => (dispatch, getState) => { //ONLY GOD/ADMIN

    const DisableUser = Status({reducer: 'app', status: 'DISABLE_USERS'});

    dispatch(DisableUser.startFetch());

    return disableUserdervice(id)
        .then(({n_users, users}) => {
            dispatch(App.setValue('', {
                users_list: users
            },'root'))
            dispatch(DisableUser.stopFetch())
        })
        .catch((e) => {
            dispatch(DisableUser.stopFetch(false, {error: 'Error al deshabilitar usuario'}))
            console.log('[ DisableUser ]', e.response.data.error)   
        })

}

//userInfo
export const UserInfo = (id) => (dispatch, getState) => { //ONLY GOD/ADMIN

    const userInfo = Status({reducer: 'app', status: 'USERS_INFO'});

    dispatch(userInfo.startFetch());

    return userInfoService(id)
        .then(({n_users, users}) => {
            dispatch(App.setValue('', {
                users_list: users
            },'root'))
            dispatch(userInfo.stopFetch())
        })
        .catch((e) => {
            dispatch(userInfo.stopFetch(false, {error: 'Error al obtener información de usuarios'}))
            console.log('[ getAllUsers ]', e.response.data.error)   
        })

}

export const createUser = () => (dispatch, getState) => { //ONLY GOD/ADMIN

    const createUser = Status({reducer: 'app', status: 'CREATE_USER'});

    dispatch(createUser.startFetch());

    return createUserService()
        .then(() => {
            dispatch(getAllUsers())
            dispatch(createUser.stopFetch())
            dispatch(open_notification("Usuario creado", "El usuario se creo correctamente"))
        })
        .catch((e) => {
            dispatch(createUser.stopFetch(false, {error: 'Error al obtener lista de usuarios'}))
            open_notification("Ups! ", e.response.data.error)
            console.log('[ createUser ]', e.response.data.error)   
        })

}

export const get_all_roles = () => (dispatch, getState) => { //ONLY GOD/ADMIN

    const all_roles = Status({reducer: 'app', status: 'USER_ROLES'});

    dispatch(all_roles.startFetch());

    return get_all_rolesService()
        .then(({n_roles, roles}) => {
            dispatch(App.setValue('', {
                roles: roles
            },'root'))
            dispatch(all_roles.stopFetch())
        })
        .catch((e) => {
            dispatch(all_roles.stopFetch(false, {error: 'Error al obtener información de usuarios'}))
            console.log('[ getAllUsers ]', e.response.data.error)   
        })

}

export const post_user_signup = (user_info = {}, create = false, resetForm)  => (dispatch, getState) => { //ONLY GOD/ADMIN

    const user_signup = Status({reducer: 'app', status: 'CREATE_USER'});

    dispatch(user_signup.startFetch());

    return get_user_signupService(user_info)
        .then((data) => {
            if(create) {
                resetForm()
                dispatch(getAllUsers());
                dispatch(user_signup.stopFetch())
            }
            else {
                dispatch(user_signup.stopFetch())
                window.location.href = '/login';
            }
        })
        .catch((e) => {
            dispatch(user_signup.stopFetch(false, {error: 'Error al crear usuario'}))
            console.log('[ post_user_signup ]', e.response.data.error)   
        })

}

export const post_user_register = (user_info = {}, create = false, resetForm)  => (dispatch, getState) => { //ONLY GOD/ADMIN

    const user_signup = Status({reducer: 'app', status: 'CREATE_USER'});

    dispatch(user_signup.startFetch());

    return get_user_signupService(user_info)
        .then((data) => {
            if(data.msg === "Registered user successfully")
            {
                dispatch(appLogin(user_info.email, user_info.password))
                
                setTimeout(window.location.href = '/app', 1200)
                dispatch(user_signup.stopFetch())
            }
            else {
                dispatch(user_signup.stopFetch(false, {error: data.msg}))
            }
        })
        .catch((e) => {
            dispatch(user_signup.stopFetch(false, {error: 'Error al crear usuario'}))  
        })

}

export const open_notification = (title , body)  => (dispatch, getState) => {
    const open_notification = Status({reducer: 'app', status: 'OPEN_NOTIFICATION'});

    dispatch(open_notification.startFetch());
    console.log("OPEN")
    try {
        dispatch(App.setValue('', {
            notification: {
                show: true,
                title: title,
                body: body
            }
        },'root'))

        dispatch(open_notification.stopFetch())
    } catch (error) {
        dispatch(open_notification.stopFetch(false, {error: 'Error al crear usuario'}))
        console.log('[ post_user_signup ]')   
    }
}

export const close_notification = ()  => (dispatch, getState) => {
    const close_notification = Status({reducer: 'app', status: 'CLOSE_NOTIFICATION'});

    dispatch(close_notification.startFetch());

    try {
        dispatch(App.setValue('', {
            notification: {
                show: false,
                title: "",
                body: ""
            }
        },'root'))

        dispatch(close_notification.stopFetch())
    } catch (error) {
        dispatch(close_notification.stopFetch(false, {error: 'Error al crear usuario'}))
        console.log('[ post_user_signup ]')   
    }
}

//Reducer
export default function reducer(state = initialState, action){
    switch(action.type){
        case `${PREFIX}/${SET_VALUE}`:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}

//Helpers
const getCustomError = (errorMsg) => {
    switch(errorMsg){
        case "Incorrect password": return "Contraseña Incorrecta";
        case "Not user found with this username" : return "Usuario no encontrado"
        default: return errorMsg;
    }
}