var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {

  it('should exist', () => {
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

  });

});
