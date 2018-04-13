import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import store from "./store";
import { userLoggedIn } from './actions/auth';

// Import localization
import localization from './localization/languages'

// Storage data in cache
if(localStorage.token){
    const user = {
        role: localStorage.role,
        token: localStorage.token
    }
    store.dispatch(userLoggedIn(user))
}

// Use localization
localization.defineLanguages()
localization.setLanguage('es')

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
