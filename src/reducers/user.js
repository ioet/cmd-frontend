export default function user(state={}, action={}){
    console.log(action.user)
    switch(action.type){
        case 'USER_LOGGED_IN':
            return action.user
        case 'USER_LOGGED_OUT':
            return {}
        default:
            return state
    }
}