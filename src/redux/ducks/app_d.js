import { parseJwt } from "../../utils/helpers";
import Status from "../../utils/status";
import { Write } from "../../utils/write";
import { AppSchema } from "../schema";
import { appLoginService } from "../services/app_d";
import { getAllusersService } from "../services/user_d";

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

                localStorage.setItem('catedralToken', token)
                dispatch(appLogin.stopFetch())
            }
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
export const deleteUsers = (id) => (dispatch, getState) => { //ONLY GOD/ADMIN

    const deleteUsers = Status({reducer: 'app', status: 'DELETE_USERS'});

    dispatch(deleteUsers.startFetch());

    return deleteUsersServices(id)
        .then(({n_users, users}) => {
            dispatch(App.setValue('', {
                users_list: users
            },'root'))
            dispatch(deleteUsers.stopFetch())
        })
        .catch((e) => {
            dispatch(deleteUsers.stopFetch(false, {error: 'Error al elimiar usuario'}))
            console.log('[ deleteUsers ]', e.response.data.error)   
        })

}

//UpdateUser
export const UpdateUser = (id) => (dispatch, getState) => { //ONLY GOD/ADMIN

    const UpdateUser = Status({reducer: 'app', status: 'UPDATE_USERS'});

    dispatch(UpdateUser.startFetch());

    return UpdateUserServices(id)
        .then(({n_users, users}) => {
            dispatch(App.setValue('', {
                users_list: users
            },'root'))
            dispatch(UpdateUser.stopFetch())
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

    return DisableUserServices(id)
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

    return userInfoServices(id)
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

//Reducer
export default function reducer(state = initialState, action){
    switch(action.type){
        case `${PREFIX}/${SET_VALUE}`:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}
