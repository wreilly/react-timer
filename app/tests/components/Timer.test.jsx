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

// TODO !!
  // describe('handleStatusChange I THINK', () => {
  //   it('should ', () => {
  //       expect().();
  //   });
// });

});
