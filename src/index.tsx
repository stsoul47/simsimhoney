import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from "./App";
import '@assets/css/reset.css';

import rootReducer from './store/rootReducer';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
      {/*<React.StrictMode>*/}
      {/*</React.StrictMode>*/}
    </Provider>
  </BrowserRouter>
)