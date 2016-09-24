/** @jsx React.DOM */
var Reflux = require('reflux');
var _ = require('lodash');
var actions = require('../actions/actions');

var _flightInfo = {};
var _shopInfo ={};

var defaultFlight = function() {
  return {"departureTime":"Sat Sep 24 2016 02:42:44 GMT-0700 (PDT)",
    "gateNumber": "5c",
    "terminal": "",
	"flightNumber":"CX732"};
  
}

var store  = Reflux.createStore({

  init: function() {
    // register findFlight action & bind to findFlight function
    this.listenTo(actions.findFlight, this.findFlight);
  },

  getFlight: function() {
    return _flightInfo;
  },


  findFlight: function(flightNo) {
  	//call backend api and return flight info
  	//mock: 
  	_flightInfo = defaultFlight();

    // pass the data on to any listeners , to reflect in DOM
    this.trigger();
  },

  getShopInfo: function(flightNo){
    //call backend api and return flight info (and also compare to where you are)
    //mock:



    return _shopInfo;
  }

});

module.exports = store;
