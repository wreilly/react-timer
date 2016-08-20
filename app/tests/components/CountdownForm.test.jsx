var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist!', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    // create a spy you can pass down
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    // $element will be the root DOM elemnt of the clock component
    // ReactDOM finds it for us; '$' jQuery selects it for us:
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // We set the valid # of seconds, for this test:
    countdownForm.refs.seconds.value = '109';
    // $el is jQuery-enabled (?) DOM node ?
    // It has .find() which can then find child DOM nodes etc.
    // Get the form DOM node, the first child of that ? -> [0]
    // which I guess is the <input> element ?
    // To submit() you need a "non-jQuery DOM node" ... ??
    TestUtils.Simulate.submit($el.find('form')[0]);

    // is no longer a string but an integer ...
    expect(spy).toHaveBeenCalledWith(109);

  });

  it('should *not* call onSetCountdown if invalid "seconds" entered - e.g. "abcd99" ', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // We set the invalid # of "seconds", for this test:
    countdownForm.refs.seconds.value = 'abcd99';
    TestUtils.Simulate.submit($el.find('form')[0]);

    // is no longer a string but an integer ...
    expect(spy).toNotHaveBeenCalled();

  });

});
