const TOKEN_KEY = "@sgblue_token"
const ID_KEY = "@sgblue_id"

export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)

export const setName = (user: string) => localStorage.setItem('@sgblue_user', user)
export const getName = () => localStorage.getItem('@sgblue_user')

export const setID = (id: number) => localStorage.setItem(ID_KEY, id.toString())
export const getID = () => localStorage.getItem(ID_KEY)

export const logoutToken = () => localStorage.removeItem(TOKEN_KEY)
export const deleteID = () => localStorage.removeItem(ID_KEY)

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) == null ? false : true
