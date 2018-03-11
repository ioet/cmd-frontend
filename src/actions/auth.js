import api from "../api"

export const userLoggedIn = user => ({
    type: 'USER_LOGGED_IN',
    user
})

export const userLoggedOut = () => ({
    type: 'USER_LOGGED_OUT'
})

export const login = credentials => dispatch => 
    api.user.login(credentials).then(user => {
        localStorage.token = user.token 
        localStorage.role = user.role
        dispatch(userLoggedIn(user))
    })

export const logout = () => dispatch => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    dispatch(userLoggedOut())
}