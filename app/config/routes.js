var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var Compose = require('../components/Compose');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} />
    <Route path='home' component={Home} />
    <Route path='guess' component={Compose} />
    <Route path='guessFactory' component={Compose} />
  </Router>
);

module.exports = routes;
