import api from "./api";

export const getAllusersService = () => api.get('users/all')
.then(({data}) => data);