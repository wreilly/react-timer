var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

// var Timer = (props) => { // Can't use this anymore!
var Timer = React.createClass({
  getInitialState: function () {
    return {
      timerCount: 0, // like count for Countdown, the number of seconds on the Clock! Here it goes up, not down.

      // timerStatus: 'stopped' // stopped, paused, started
      // HMM. Holding my nose here, but too lazy, too unsure, to
      //      start refactoring right here right now.
      // Instead of my TIMER-specific 'timerStatus',
      // I'll "(re-)"use the not very generally named
      // "countdownStatus" here (since it's hardwired and required
      // in the so-called "(re-)"usable component 'Controls'). HMMPH.
      // Better name? clockState: stopped, paused, started / running
      // Be that clock number of seconds going up (Timer) or going down (Countdown). Cheers.
      countdownStatus: 'stopped' // as in Controls component, first written for Countdown parent component
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      // CHANGE!
      switch (this.state.countdownStatus) { // stopped, started, paused
        case 'started':
        // From very beginning, or from a pause, we've hit START
          // start timer (seconds will start going up 00:00 -> 00:01 ...)
          // "Pause/Start" button needs to now read "Pause"
          this.startTimer(); // or handleStart() ...
          break;
          // Note: We don't do the "what the button reads" logic in here. (Frank Goodness). That happens over in Controls.jsx.
        case 'stopped':
        // While running ('started') OR 'paused', we've hit CLEAR
          // stop timer << ?? what action ??
          // reset clock seconds number to 00:00 (just pass in 0)
          this.setState({ timerCount: 0});
          // "Pause/Start" button needs to now read "Start" (see Controls)
          // break; // no use of break, here. go on to 'paused'
        case 'paused':
        // While running ('started'), we've hit PAUSE
          // stop timer << ?? what action ??
          // "Pause/Start" button needs to now read "Start" (see Controls)
          // do *not* reset clock seconds number. Just pause.
          // tidy up:
          // http://www.w3schools.com/jsref/met_win_clearinterval.asp
          clearInterval(this.timer);
          this.timer = undefined; // Instructor DID use this line. ok.
          break;
        // default: // none
      }
    }
  },
  componentWillUnmount: function () {
    /*
warning.js?8a56:44 Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the Timer component.warning @ warning.js?8a56:44getInternalInstanceReadyForUpdate @ ReactUpdateQueue.js?fd2c:49enqueueSetState @ ReactUpdateQueue.js?fd2c:201ReactComponent.setState @ ReactComponent.js?702a:64(anonymous function) @ Timer.jsx?e360:62

LINE WAS:       this.setState({ timerCount: newTimerCount});
    */
    // O.K. - you really need to clean up when your component is
    // about to unmount (e.g. you navigate away to other page, etc.)
    // Especially when there's an open timer going off ...
    clearInterval(this.timer);
    this.timer = undefined; // <<< Instructor did NOT use this line. Hmm.
  },
  startTimer: function () {
    var newTimerCount = 0; // initialize why not
    newTimerCount = this.state.timerCount;
    // Put setInterval onto a named variable,
    //  so you can clear it, by name, later.
    this.timer = setInterval( () => {
      newTimerCount += 1; // add one second each time through ...
      // No need to validate - it can only go up, no limit
      this.setState({ timerCount: newTimerCount});
    }, 1000); // one second interval increments
  },
  // Hah. Right here I can use my own name for this little quick var: newClockState. Hah.
  handleStatusChange: function (newClockState) {
    this.setState({ countdownStatus: newClockState })
  },
  render: function () {
    // var {timerCount, timerStatus} = this.state; // see above hullabaloo
    var {timerCount, countdownStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Our Stopwatch (Timer)</h1>
        <Clock totalSeconds={timerCount}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
});

module.exports = Timer;
