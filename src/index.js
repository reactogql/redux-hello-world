import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import Todos from "./components/todos";
import TodoOne from "./components/one_todo";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path={"/todos"} exact component={Todos} />
          <Route path={"/todos/:id"} component={TodoOne} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
