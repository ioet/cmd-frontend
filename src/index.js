import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import store from "./store";
import { userLoggedIn } from './actions/auth';

// Import the translation module
import T from 'i18n-react';

// Add the texts for your APP
T.setTexts({
    labels: {
        accept: "Aceptar",
        decline: "Declinar"
    }
});

if(localStorage.token){
    const user = {
        role: localStorage.role,
        token: localStorage.token
    }
    store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
