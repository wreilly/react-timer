var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

// var Countdown = (props) => { // Can't use this anymore!
var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped', // stopped, paused, started
    };
  },
  // React component lifecycle:
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      console.log("WR__ 01 componentDidUpdate time! prevState.countdownStatus: ", prevState.countdownStatus);
      console.log("WR__ ! 02 this.state.countdownStatus: ", this.state.countdownStatus);

      // CHANGE!
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        // default:

      }
    }
  },
  startTimer: function () {
    // JavaScript: setTimer() setInterval()
    // pass arrow function to setInterval(), and # milliseconds:
    this.timer = setInterval( () => {
      // subtract 1 per second:
      var newCount = this.state.count - 1;
      this.setState({
        // Don't go below zero! Ternary operator:
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
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
