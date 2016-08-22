var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

// var Countdown = (props) => { // Can't use this anymore!
var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped' // stopped, paused, started
    };
  },
  // React component lifecycle:
  // after update to Props or to State
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      // console.log("WR__ 01 componentDidUpdate time! prevState.countdownStatus: ", prevState.countdownStatus);
      // console.log("WR__ ! 02 this.state.countdownStatus: ", this.state.countdownStatus);

      // CHANGE!
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          // NO 'break' here!
          // proceed to do the things in the 'paused' case, too:
        case 'paused':
          // doesn't set it back to 0. Just pause.
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        // default:

      }
    }
  },
  // componentWillUpdate: function (nextProps, nextState) {
  //   // check just before data change
  // },
  // componentWillMount: function () {
  //   // no access to refs or DOM
  //   // can't change to value INPUT fields, nor fetch values
  //   console.log("WR__ componentWILLMount just fired!");
  // },
  // componentDidMount: function () {
  //   // right AFTER all is rendered to DOM
  //   // you DO have access to refs, if you want to update anything
  //   console.log("WR__ componentDidMount you see");
  // },
  componentWillUnmount: function () {
    // console.log("WR__ componentDIDUnmount, friend (Browser console)");
    // without this, the timer kept running, even if user navigates to other page in our app
    clearInterval(this.timer);
    this.timer = undefined;

/* ** UPDATE: Ok now. I believe webpack hadn't picked up latest edit.
****** HMM. With countdown just left to run out (neither Paused nor Stopped), the timer interval is still going (see log).
Navigated to other page (named 'Timer') and got this error:
GOT:
warning.js?8a56:44 Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the Countdown component.

Countdown.jsx Line 58:
    this.setState({
      // Don't go below zero! Ternary operator:
      count: newCount >= 0 ? newCount : 0
    });
  *********
*/

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
      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({ countdownStatus: newStatus});
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };
    return (
      <div>
{/*        <p>The Countdown component is here on screen.</p>
*/}
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {/* Hmm. Render the FORM only when countdownStatus is STOPPED.
          Otherwise (for paused, started), render the Controls */}
          {renderControlArea()}
      </div>
    )
  }
});

module.exports = Countdown;
