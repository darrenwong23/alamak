/** @jsx React.DOM */
var React         = require('react');
// routing
var Router        = require('react-router');
var RouteHandler  = Router.RouteHandler;
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;


var Main          = require("./components/main");
var Shops          = require("./components/shops");
var Map           = require("./components/map");

var routes = (
  <Route handler={ BannerManager }>
      <Route name="map" path="/map" handler={ Map } />

    <Route name="shops" path="/shops/:flightInfo" handler={ Shops } />
    <DefaultRoute name="home" handler={ Main } />
  </Route>
);

var BannerManager = React.createClass({
  render: function() {
    return (
      <RouteHandler/>
    );
  }
});

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
