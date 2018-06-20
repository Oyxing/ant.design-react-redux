import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import { Provider } from 'react-redux'
import store from "./store";
function RouterConfig({ history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default RouterConfig;
