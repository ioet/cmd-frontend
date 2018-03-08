export default function user(state={}, action={}){
    switch(action.type){
        case 'USER_LOGGED_IN':
            console.log("action" + action.user.email)
            return action.user
        default:
            return state
    }
}