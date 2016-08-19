var React = require('react');
var {Link, IndexLink} = require('react-router');

// Hmm. In Weather app, Nav.jsx is not a "Statelss Functional Component"
// Instead, it is a plain old React.createClass.
// Guess I should do same here ...
// Nope! Instructor says A-O.K. to go SFC.
// Worked: var Nav = (props) => {
// var Nav = React.createClass({
var Navigation = (props) => {
//    render: function() {
      return (
        // http://foundation.zurb.com/sites/docs/top-bar.html
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Timer App</li>
              <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
              <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
{/* Old way. Now the styling (bold) is in the styles/components/_navigation.scss

                <li><IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
                <li><Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
*/}
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Spiffed up by <a href="http://web.mit.edu" target="_blank">William R.</a></li>
            </ul>
          </div>
        </div>
      );
//    }
}



module.exports = Navigation;
