var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

// var Countdown = (props) => { // Can't use this anymore!
var Countdown = React.createClass({
  getInitialState: function () {
    return { count: 0 }; // return simple object
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
{/*        <p>The Countdown component is here on screen.</p>
*/}
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = Countdown;
