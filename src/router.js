import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import { Provider } from 'react-redux'
import { DesignApp,Nav,Login,Register} from './containers'
import store from "./store";
function RouterConfig({ history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
            <Nav />
            <Switch>
              <Route path="/" exact component={ IndexPage } />
              <Route path='/design' component={ DesignApp }/>
              <Route path='/login' component={ Login }/>
              <Route path='/register' component={ Register }/>
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default RouterConfig;
