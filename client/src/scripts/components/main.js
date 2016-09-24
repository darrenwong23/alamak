/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Reflux     = require('reflux');
var Store = require('../stores/store');
var Link = require('react-router').Link;
var actions = require('../actions/actions');
var $ = require('jquery');

var Main = React.createClass({
	  mixins: [
    Router.Navigation,
    Router.State,
    Reflux.ListenerMixin
  ],
  getInitialState: function(){
  	return {
  		flightInfo: null
  	}
  },
  componentDidMount: function() {
    this.listenTo(Store, this.updateFlightInfo);
  },

  render: function() {
 // actions.findFlight.bind(this)
 $.ajax({url: "http://localhost:3000/",
            type: "GET",
            dataType:"jsonp",
            success: function( data ) {
      alert( "Load was performed." + data );
    }
  });

 	var flightInputOrPreview  = null;
 	if(this.state.flightInfo){

 		flightInputOrPreview = (
 			<div>

 			<li>{this.state.flightInfo}</li>
      <li>another flight info</li>
      <li>random stuff</li>
 			<button type="button" className="btn btn-primary" 
 			onClick={this.handleNext.bind(this)}>Next</button>
 			</div>
 		);

 	}else {
 		flightInputOrPreview = (
 			<div>
	        	Enter Flight No.
		      <input type="text" className="form-control" id={"flightno"} ref={"flightno"} key={"flightno"}/>
		      <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Go</button>
 			</div>
		)
 	}
    return (
      <div>
       {flightInputOrPreview}

      </div>
    )
  },
  handleNext: function(){
  	window.location.assign('/#/shops/'+this.state.flightInfo.flightNumber);
  },
  handleClick: function(){
  	var flightNo = this.refs.flightno.getDOMNode().value;
  	actions.findFlight(flightNo);
  },
  updateFlightInfo: function(){
  	this.setState({
  		flightInfo: Store.getFlight()
  	})
  }

});

module.exports = Main;
