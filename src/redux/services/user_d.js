import api from "./api";

export const getAllusersService = () => api.get('users/all')
.then(({data}) => data);

export const createUserService = (id) => api.get(`users/signup`)
.then(({data}) => data);

export const deleteUserService = (id) => api.get(`users/${id}/delete`)
.then(({data}) => data);