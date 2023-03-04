
import { UserSchema } from "../schema";
// import {Write} from "../../utils/write"
// import Status from "../../utils/status"

const initialState = {...UserSchema}

const PREFIX = 'USER';
const SET_VALUE = 'SET_VALUE';

// const User = Write({reducer: 'user'})

//Action Example 


export default function reducer(state = initialState, action){
    switch(action.type){
        case `${PREFIX}/${SET_VALUE}`:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}