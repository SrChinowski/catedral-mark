import Status from "../../utils/status";
import { Write } from "../../utils/write";
import { AppSchema } from "../schema";
import { appLoginService } from "../services/app_d";

const SET_VALUE = 'APP/SET_VALUE'
const initialState = AppSchema;

const App = Write({ reducer : 'app'})

//Actions
export const appLogin = (email, password) => (dispatch, getState) => {
    const appLogin = Status({reducer: 'app', status: 'GET_APP_LOGIN'});

    appLogin.startFetch()

    return appLoginService(email, password)
        .then(({token, first, error}) => {
            if(error){
                console.log('ERROR EN SERVICIO')
                appLogin.stopFetch();
            }
            else{
                dispatch(App.setValue('', {token}, 'root'))
                appLogin.stopFetch();
            }
        })
} 

//Reducer
export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_VALUE:
            return {
                ...state, 
                statuses: action.payload,
                errors: action?.error ? action?.error : state.errors
            };
            
        default: return state;
    }
}