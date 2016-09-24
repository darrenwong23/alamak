/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Reflux     = require('reflux');
var Store = require('../stores/store');
var Link = require('react-router').Link;
var actions = require('../actions/actions');


var Main = React.createClass({
	  mixins: [
    Router.Navigation,
    Router.State,
    Reflux.ListenerMixin
  ],
  getInitialState: function(){
    var flightInfo = this.context.getCurrentParams().flightInfo;
  	return {
  		shopInfo: Store.getShopInfo(flightInfo),
      mode: "shopInfo"
  	}
  },
  render: function() {
 // actions.findFlight.bind(this)
    return (
      <div>
        {/*Fill in however you want to display your shop info */}
        <ul>
        <li>Shop 1</li>
        <li>shop 2</li>
        <li>shop 3</li>
        <li>s hop 4</li>
        </ul>
      <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Select Shops</button>
     </div>
    )
  },
  handleClick: function(){
    this.transitionTo("map");
  }

});

module.exports = Main;
