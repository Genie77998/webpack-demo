import $ from 'zepto';
import Router from 'react-router';
import React from 'react';
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
        </header>
        <img src = {require('./../images/1.png')} />
        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});


var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <p>Dashboard</p>
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function () {
    return (
      <div>
        <p>Inbox</p>
      </div>
    );
  }
});

var Calendar = React.createClass({
  render: function () {
    return (
      <div>
        <p>Calendar</p>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});


// Or, if you'd like to use the HTML5 history API for cleaner URLs:

/*Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});*/
require('../css/stylea.css');
require('../css/styleb.css');
var  contnent = require('./content');
var  a = require('./a');
var  b = require('./b');
var  c = require('./c');

contnent.init();
a.init();
b.init();
c.init();
