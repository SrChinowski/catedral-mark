export const AppSchema = {
    token: "",
    users_list: [],
    statuses: [],
    errors: {},
    roles:[]
}

export const LoginSchema = {
    token: "",
    first: false
}

export const UserSchema = {
    id: "",
    name: "",
    username: "",
    email: "",
    role: "",
    firstTime: false,
}

export const ItemsSchema = {
    items: [],
    n_items : 0,
    item_info: {},
    itemType: "",
    tags: []
}