import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Description from './components/warehouse/Description';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/landing/Landing';
import Dashboard from './components/layout/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () =>  {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavigationBar/> 
          <Route exact path='/' component = { Landing } />

          <Switch>
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/description' component={ Description } />
            <PrivateRoute exact path='/dashboard' component={ Dashboard } />
          </Switch>

        </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
