var React = require('react');
var ReactDOM = require('react-dom');

// ES6 destructuring ... just pull out the what, methods you want from the module ...
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// ES5 equivalent
// var Route = require('react-router').Route;
// var Router = require('react-router').Router;
// ...
var Main     = require('Main');

// Load foundation
// You need the css loader: 'css!'
// Also the style loader to make styles "show up" in the HTML:  'style!'
require('style!css!foundation-sites/dist/foundation.min.css');
// Start up foundation:
$(document).foundation();

// App css
// uses an alias, in webpack.config.js
// NEW: the SASS loader
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
{/*
        // JSX Expression inside {}
        // <Route path="examples" component={Examples} />
        // <Route path="about"    component={About} />
        // <IndexRoute component={Weather}/>
*/}
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
);
