import Status from "../../utils/status";
import { Write } from "../../utils/write";
import { ItemsSchema } from "../schema";
import { getAllItemsService } from "../services/items_d";
const PREFIX = 'ITEMS';
const SET_VALUE = 'SET_VALUE';
const initialState = {...ItemsSchema};

const Items = Write({ reducer : 'items'})

const create_query_params = (filters) => {
	let query_params = '';

	Object.keys(filters).forEach((f) => {
		query_params = query_params + `${f}=${filters[f]}&`;
	})

	return query_params;
}

export const get_all_items = (filters = {}) => (dispatch, getState) => {

    const getAllItems = Status({reducer: 'items', status: 'GET_ITEMS_ALL'});
    dispatch(getAllItems.startFetch());

    return getAllItemsService(create_query_params(filters))
    .then(({n_items, items}) => {
        dispatch(Items.setValue('', {
            n_items: n_items,
            items: items
        },'root'))
        dispatch(getAllItems.stopFetch())
    })
    .catch((e) => {
        dispatch(getAllItems.stopFetch(false, {error: 'Error al obtener lista de items'}))
        console.log('[ get_all_items ]', e.response.data.error)   
    })
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case `${PREFIX}/${SET_VALUE}`:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}