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
      backgroundColor="#8c0081"
      component={ resultsContainer } />
  </Route>
</Router>
);

module.exports = routes;