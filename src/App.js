import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Description from './components/warehouse/Description';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing'
import axios from 'axios'
import './App.css';

const App = () =>  {

  axios.get('http://4fcapi-env.eba-zxpamdfp.ap-south-1.elasticbeanstalk.com/users/read/all').then((data) => {
    console.log(data)
  })

  return (
    <Router>
        <Fragment>
          <NavigationBar/> 
          <Route exact path='/' component = { Landing } />

          <Switch>
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/description' component={ Description } />
          </Switch>

        </Fragment>
    </Router>
  );
}

export default App;
