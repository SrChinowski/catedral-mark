export const Write = ({ reducer }) => {
    const setValue = (
        path, //Path obligatorio si no es root
        value, //Info a guardar
        type = 'normal', //Si es root busca modelo definido
    ) => (dispatch, getState) => {
        const state = getState()[reducer];
        const PREFIX = reducer.toUpperCase();
        const obj = { ...state };
        const lodash = require('lodash');
    
        Object.freeze(state);

        let updatedState = {};
    
        if (type === 'root') {
            updatedState = obj;
            Object.keys(value).map((key) => (
                updatedState = lodash.set(updatedState, key, value[key])
            ));
        } else updatedState = lodash.set(obj, path, value);
    
        if(!Object.is(state, updatedState)) return dispatch({ type: `${PREFIX}/SET_VALUE`, payload: updatedState });
    }

    return {
        setValue,
    };
}