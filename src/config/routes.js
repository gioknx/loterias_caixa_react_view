var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");


var resultsContainer = require('../containers/resultsContainer');
var routes = (
<Router history={ hashHistory }>
  <Route path='/' component={ Main }>
    <IndexRoute component={ Home } />
    <Route path='/megasena'
      contestName='megasena'
      backgroundColor="#117e56"
      component={ resultsContainer } />
    <Route path='/lotomania'
      contestName='lotomania'
      backgroundColor="#ff5722"
      component={ resultsContainer } />
    <Route path='/duplasena'
      contestName='duplasena'
      backgroundColor="#c2185b"
      component={ resultsContainer } />
    <Route path='/quina'
      contestName='quina'
      backgroundColor="#283593"
      component={ resultsContainer } />
    <Route path='/timemania'
      contestName='timemania'
      backgroundColor="#ffeb3b"
      component={ resultsContainer } />
    <Route path='/lotofacil'
      contestName='lotofacil'
      backgroundColor="#8c0081"
      component={ resultsContainer } />
  </Route>
</Router>
);

module.exports = routes;