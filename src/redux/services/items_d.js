import api from "./api";

export const getAllItemsService = (query) => api.get(`items/all?${query}`)
.then(({data}) => data);