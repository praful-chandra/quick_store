import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

//importing redux Store
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
