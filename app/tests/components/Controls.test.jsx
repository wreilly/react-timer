var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render Pause!, when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />); // set as 'started' for this TestUtils
      var $el = $(ReactDOM.findDOMNode(controls));

// WR__  Worked! //////////////////////////////////
      // when Pause! is shown, it is in the 'secondary' button:
      // var buttonTextActual = $el.find('.secondary').text();
      // var buttonTextExpected = 'Pause!';
      // expect(buttonTextActual).toBe(buttonTextExpected);
      // Hmm. What is difference of my non-jQuery (no '$' var) , from the Instructor's, below ?
// /WR__ //////////////////////////////////

      var $pauseButton = $el.find('button:contains(Pause!)');
      expect($pauseButton.length).toBe(1); // number of elements found by jQuery -- should be one

    });

    it('should render Start!, when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />); // set as 'paused' for this TestUtils
      var $el = $(ReactDOM.findDOMNode(controls));

// WR__  Worked! //////////////////////////////////
      // when Start! is shown, it is in the 'primary' button:
      // var buttonTextActual = $el.find('.primary').text();
      // var buttonTextExpected = 'Start!';
      // expect(buttonTextActual).toBe(buttonTextExpected);
// /WR__ //////////////////////////////////

      var $startButton = $el.find('button:contains(Start!)');
      expect($startButton.length).toBe(1); // number of elements found by jQuery -- should be one
    });

  });

})
