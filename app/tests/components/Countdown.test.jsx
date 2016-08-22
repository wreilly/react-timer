var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {

  it('should exist', () => {
    // console.log("WR__ Countdown.test.jsx SHOULD EXIST console.log fun ");
    console.log("WR__ Countdown.test.jsx SHOULD EXIST console.log fun COUNTDOWN: ", Countdown);
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    // tell Mocha it's going to be asynchrounous, with done:
    it('should set state to "started" and, count down!', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />); // no props taken
      countdown.handleSetCountdown(10); // test 10 why not

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      // call this once:
      setTimeout( () => {
         expect(countdown.state.count).toBe(9);
         done(); // then call done, down here, tell Mocha: "move on!"
      }, 1001); // just over 1 second. should be 9, not 10
    });

    // (again) tell Mocha it's going to be asynchrounous, with done:
    it('should not count down below zero', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1); // 1 to negative 2... (3 seconds)

      // call this once:
      setTimeout( () => {
         expect(countdown.state.count).toBe(0);
         done(); // (as above) Call done, down here, tell Mocha: "move on!"
      }, 3001); // just over 3 seconds. should still be 0, not -2 !
    });

    // asynchrounous! got to use "done" < not reserved word. try doneHere = ok!
    // https://justinbellamy.com/testing-async-code-with-mocha/
    it('should pause countdown on paused status', (doneHere) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />); // no props
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused'); // fake/force the status to paused

      setTimeout( () => {
        expect(countdown.state.count).toBe(3); // still 3 !
        expect(countdown.state.countdownStatus).toBe('paused');
        doneHere();
      }, 1001); // just enough to do at least one cycle ...
    });

    // asynchrounous, natch
    it('should reset count, stop countdown on stopped status', (doneHereAgain) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />); // no props
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped'); // fake/force the status to stopped

      setTimeout( () => {
        expect(countdown.state.count).toBe(0); // zeroed out
        expect(countdown.state.countdownStatus).toBe('stopped');
        doneHereAgain();
      }, 1001);
    });

  });

});
