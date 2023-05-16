import { findUserAction } from "../../utils/helpers";
import Status from "../../utils/status";
import { Write } from "../../utils/write";
import { ItemsSchema } from "../schema";
import { 
    getAllItemsService,
    postItemCreateService, 
    getItemInfoService,
    postItemUpdateService,
    deleteItemService
} from "../services/items_d";
const PREFIX = 'ITEMS';
const SET_VALUE = 'SET_VALUE';
const initialState = {...ItemsSchema};

const Items = Write({ reducer : 'items'})

//HELPERS
const create_query_params = (filters) => {
	let query_params = '';

	Object.keys(filters).forEach((f) => {
		query_params = query_params + `${f}=${filters[f]}&`;
	})

    console.log(query_params)
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

//CRUD
export const item_create = (filters = {}, itemInfo = {}) => (dispatch, getState) => {

    const postItemCreate = Status({reducer: 'items', status: 'POST_ITEMS_CREATE'});
    dispatch(postItemCreate.startFetch());

    return postItemCreateService(create_query_params(filters), itemInfo)
    .then((res) => {
        window.location.href = '/app';
        dispatch(postItemCreate.stopFetch())
    })
    .catch((e) => {
        dispatch(postItemCreate.stopFetch(false, {error: 'Error al crear item'}))
        console.log('[ item_create ]', e.response.data.error)   
    })
}

export const get_item_info = (userActions, itemId = '') => (dispatch, getState) => {

    const getItemInfo = Status({reducer: 'items', status: 'GET_ITEMS_INFO'});
    dispatch(getItemInfo.startFetch());

    let adminURL = findUserAction(userActions, 'items_get_admin_info') ? '/admin' : '';

    console.log("adminURL", adminURL)
    return getItemInfoService(adminURL, itemId)
    .then((res) => {
        dispatch(Items.setValue('', {
            item_info: res
        },'root'))
        dispatch(getItemInfo.stopFetch())
    })
    .catch((e) => {
        dispatch(getItemInfo.stopFetch(false, {error: 'Error al obtener info del item'}))
        console.log('[ get_item_info ]', e.response.data.error)   
    })
}

export const update_item = (itemId = '', itemMarcId = '', filters = {}, itemInfo = {}) => (dispatch, getState) => {

    const postItemUpdate = Status({reducer: 'items', status: 'POST_ITEMS_UPDATE'});
    dispatch(postItemUpdate.startFetch());

    return postItemUpdateService(itemId, itemMarcId, create_query_params(filters), itemInfo)
    .then((res) => {
        window.location.href = '/app';
        dispatch(postItemUpdate.stopFetch())
    })
    .catch((e) => {
        dispatch(postItemUpdate.stopFetch(false, {error: 'Error al actualizar item'}))
        console.log('[ update_item ]', e)   
    })
}

export const delete_item = (itemId = '', filters = {}, setShowDialog = {}, returnToItems = false) => (dispatch, getState) => {

    const deleteItem = Status({reducer: 'items', status: 'DELETE_ITEMS_DELETE'});
    dispatch(deleteItem.startFetch());

    return deleteItemService(itemId, create_query_params(filters))
    .then((res) => {
        window.location.href = '/app';
        setShowDialog(false);
		dispatch(get_all_items(filters));
        dispatch(deleteItem.stopFetch())

        if (returnToItems) window.location.href =  '/app';
    })
    .catch((e) => {
        dispatch(deleteItem.stopFetch(false, {error: 'Error al eliminar item'}))
        console.log('[ delete_item ]', e.response.data.error)   
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