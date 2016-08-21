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
/*
running Karma (npm test) it flags this testing error:
Controls
  ✔ should exist
ERROR: 'Warning: Failed prop type: Required prop `onStatusChange` was not specified in `Controls`.
  in Controls'
LOG: 'WR__ 03 Controls.jsx RENDER: this.props.countdownStatus: ', 'started'
  render
    ✔ should render Pause!, when started

Rationale for Why This is O.K.: (I think?)
Here in the test, we are essentially passing in the "change" - of status.
We do not really need to trigger a method, for this test-driven status change (not a U/I change).
Does that sound like a correct rationale? I am not so sure. Hmm.
Or maybe, it's more like: It's hard (not possible?) to get a method here... ( ? ), so we skip it ?
*/
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
