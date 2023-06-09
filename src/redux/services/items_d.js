import api from "./api";

export const getAllItemsService = (query) => 
    api.get(`items/all?${query}`)
.then(({data}) => data);

export const postItemCreateService = (query, data) => 
    api.post(`items/create?${query}`,data)
.then(({data}) => data);

export const getItemInfoService = (adminURL, itemId) => 
    api.get(`items${adminURL}/${itemId}/info`)
.then(({data}) => data);

export const postItemUpdateService = (itemId, itemMarcId, query, data) => 
    api.put(`items/${itemId}/${itemMarcId}/update?${query}`,data)
.then(({data}) => data);

export const deleteItemService = (itemId, query) => 
    api.delete(`items/${itemId}/delete?${query}`)
.then(({data}) => data);

export const get_templatesService = (query) => 
    api.get(`/templates/data?${query}`)
.then(({data}) => data);
