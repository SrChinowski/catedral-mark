import api from "./api";

export const getAllusersService = () => api.get('users/all')
.then(({data}) => data);

export const deleteUsersService = (id) => api.delete(`users/${id}/delete`)
.then(({data}) => data);

export const updateUserService = (id) => api.get(`users/${id}/update`)
.then(({data}) => data);

export const disableUserdervice = (id) => api.get(`users/${id}/disable`)
.then(({data}) => data);

export const userInfoService = (id) => api.get(`user/${id}/info`)
.then(({data}) => data);

export const createUserService = (id) => api.get(`users/signup`)
.then(({data}) => data);

export const get_all_rolesService = () => api.get('roles/all')
.then(({data} )=> data);

export const get_all_admin_usersService = () => api.get('users/all')
.then(({data} )=> data);

export const get_user_signupService = (data) => api.post('users/signup', data)
.then(({data} )=> data);

