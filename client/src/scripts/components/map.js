/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Reflux     = require('reflux');
var Store = require('../stores/store');
var Link = require('react-router').Link;
var actions = require('../actions/actions');


var Map = React.createClass({
	  mixins: [
    Router.Navigation,
    Router.State,
    Reflux.ListenerMixin
  ],
  getInitialState: function(){
    return {};
  },
  render: function() {
 // actions.findFlight.bind(this)
    return (
      <div>
        <div>
          hello hello i am a maps
        </div>
        <img src="http://hawaii.gov/lih/terminal-information/folder/LihueAirportMap.jpg/image_large"/>

        <div>
          this is another sample from changi airport
        </div>
        <img src="http://www.changiairport.com/etc/designs/cag/clientlibs/map/img/landing.png" height="400" width="800"/>
      </div>
    )
  },


});

module.exports = Map;
