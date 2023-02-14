import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store'



let storeInstance = Store()

ReactDOM.render(
    <Router>
    <Provider store={storeInstance}>
        
            <App />
        
    </Provider>
    </Router>

    , document.getElementById('root'));



