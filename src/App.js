import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Description from './components/layout/warehouse/Description';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/landing/Landing';
import Dashboard from './components/layout/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Category from './components/layout/category/Category';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import 'rsuite/dist/styles/rsuite-default.css';
import './bootstrap.min.css'
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
        <NavigationBar/> 
          <Route exact path='/' component = { Landing } />

          <Switch>
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/description/:identifier' component={ Description } />
            <Route exact path='/category' component={ Category } />
            <PrivateRoute exact path='/dashboard' component={ Dashboard } />
          </Switch>
    </Router>
    </Provider>
  );
}

export default App;
