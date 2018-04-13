import { combineReducers } from 'redux';
import user from "./user"
import { localeReducer as locale } from 'react-localize-redux';

export default combineReducers({
    user,
    locale
})
