var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

// jQuery as '$'
var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it ('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      // $element will be the root DOM elemnt of the clock component
      // ReactDOM finds it for us; '$' jQuery selects it for us:
      var $element = $(ReactDOM.findDOMNode(clock));
      var actualText = $element.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      // No need to specify properties (because we have them already (?) ...)
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 615; // 10 mins 15 seconds
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    })

    it('should format seconds when min or sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 61; // 1 mins 1 second
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    })
  });

});
