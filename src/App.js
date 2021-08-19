import React from 'react';
import {Router, HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/Loadable';
import Application from './pages/Application/Loadable';
import Blog from './pages/Blog/Loadable';
import NotFoundPage from './pages/NotFoundPage/Loadable';
import Loading from './components/Loading';
import history from './utils/history';

function App(props) {
  return (
    <Router history={history}>
      <React.Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/application" render={props => <Application {...props} />}/>
          <Route exact path="/blog" render={props => <Blog {...props} />}/>
          <Route path="/:ZipCode" render={props => <Application {...props} />}/>
          <Route path="/" render={props => <HomePage {...props}/>}/>
          {/*<Route exact path="/application/:step" component={ApplicationPage} />*/}
          <Route render={props => <NotFoundPage {...props} />}/>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
