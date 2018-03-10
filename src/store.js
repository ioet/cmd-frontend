import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
);

export default store