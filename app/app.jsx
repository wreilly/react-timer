var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main     = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
// Start up foundation:
$(document).foundation();

// App css
// SASS loader
require('style!css!sass!applicationStyles');


// Hey! These Routes are NESTED. So from '/' the
//  next level down "inherits" that '/' so 'countdown' is
//  really '/countdown'   Veddy interesting ... ...
ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="countdown" component={Countdown} />
        {/* No path for IndexRoute */}
        <IndexRoute component={Timer} />
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
);
