import React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "./components/__layout/Layout";
import { createStore } from "redux";
import allReducers from "./ReducerHelper";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <Layout />
  </Provider>
);
