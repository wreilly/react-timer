var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

/*
NEW TESTS FOR *TIMER*

EXISTING: (model)
Countdown
  ✔ should exist
  handleSetCountdown
    ✔ should set state to "started" and, count down!
    ✔ should not count down below zero
    ✔ should pause countdown on paused status
    ✔ should reset count, stop countdown on stopped status

NEW:
Timer
  ✔ should exist
  handleStatusChange << ??
    ✔ should set state to "started" and, start timer, counting up!
    ✔ should pause timer on paused status
    ✔ should reset count, stop timer on 'Clear' = stopped status
*/

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

/* UPDATE: O.K., the Instructor does NOT group these 3 tests
           conceptually below any sub-header. (e.g. no 2nd level
           describe('') ) */
  // describe('handleStatusChange I THINK', () => {
  //   it('should ', () => {
  //       expect().();
  //   });
// });

// ASYNCH! Tell Mocha about 'done'!
  it('should ... start timer, at 0, and proceed to count (e.g. to 1), upon "started" status (countdownStatus)', (wr__done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');
    expect(timer.state.timerCount).toBe(0);

    setTimeout( () => {
      expect(timer.state.countdownStatus).toBe('started');
      expect(timer.state.timerCount).toBe(1);
      wr__done();
    }, 1001); // just over one second
  });


  it('should ... pause timer, at upon "paused" status', (wr__done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    // arbitrarily start at 10 for the pause
    // timer.state.timerCount = 10; // <<< NOT SO GOOD
    // Ah hah. Better: use setState() :
    timer.setState({ timerCount: 10 });
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout( () => {
      expect(timer.state.countdownStatus).toBe('paused');
      expect(timer.state.timerCount).toBe(10);
      wr__done();
    }, 1001); // just over one second
  });

  it('should ... stop and clear timer count, at upon "stopped" status ("Clear" button)', (wr__done) => {

    var timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({ timerCount: 11 }); // 11 for this test to begin ...

    timer.handleStatusChange('started');
    // timer.handleStatusChange('stopped'); // We'll 'stop' it below ...

    console.log("WR__ 98 Is It 0? timer 'stopped' status: timer.state.timerCount: ", timer.state.timerCount); // YES. 0.

/* ************************
   HMM - I REALLY DON'T KNOW HOW TO MAKE THIS WORK
   OK
   WITHIN TEST, RUN A TIMEOUT/INTERVAL SOME # OF TIMES ...
   OK
    // setTimeout( () => { // Pal! How about setInterval, not setTimeout! d'oh!
    setInterval( () => {
      // emulates the setInterval line of code in Timer.jsx startTimer().
      timer.state.timerCount++;

// This does NOT get logged (inside this timeout thing)
      console.log("WR__ 99 setInterval timer.state.timerCount: ", timer.state.timerCount);
    }, 1000); // let 'er rip 3 secs

    console.log("WR__ 100 Is It 3? (4?) timer 'stopped' status: timer.state.timerCount: ", timer.state.timerCount); // NO. It is still 0.
   ********************************
*/

    // Just TOTALLY FAKING it:
// Reach OVER into the imported object of TIMER to modify TIMER.state to get the actual variable for timerCount!
// Interesting: "++" does not work,
//              but " + 1" does. Huh.
// NOPE:   timer.setState({ timerCount: timer.state.timerCount++ });
    timer.setState({ timerCount: timer.state.timerCount + 1 });
    timer.setState({ timerCount: timer.state.timerCount + 1 });
    timer.setState({ timerCount: timer.state.timerCount + 1 });

// Hmm. Did NOT Work. ? Reach into this.state to get the actual variable for timerCount! Then you can "++" it.
//  TypeError: Cannot read property 'state' of undefined
    // timer.setState({ timerCount: this.state.timerCount++ });
    // timer.setState({ timerCount: this.state.timerCount++ });
    // timer.setState({ timerCount: this.state.timerCount++ });

// Did NOT Work. Can't get "timerCount" (a mere object attribute) to "++" itself. It is not a variable!
// ReferenceError: timerCount is not defined
    // timer.setState({ timerCount: timerCount++ });
    // timer.setState({ timerCount: timerCount++ });
    // timer.setState({ timerCount: timerCount++ });

// Worked, but not using setState, so, Not So Good! :
    // timer.state.timerCount++;
    // timer.state.timerCount++;
    // timer.state.timerCount++; // 3 seconds "go by..."

    console.log("WR__ 102 FAKED. Is It 14? : timer.state.timerCount: ", timer.state.timerCount);
    expect(timer.state.timerCount).toBe(14); // FAKED it! //

    timer.handleStatusChange('stopped');

    setTimeout( () => {
      expect(timer.state.countdownStatus).toBe('stopped');
      expect(timer.state.timerCount).toBe(0);
      wr__done();
    }, 1001); // just over one second
  });


});
