var React = require('react');

var Clock = React.createClass({
  // https://facebook.github.io/react/docs/reusable-components.html#default-prop-values
  // Works WITHOUT return {} Hmm.
  //   Looks odd. ES6? No idear.
  // Note: Using return {}, you CAN put
  //       comma at end of line key: value,
  //       Without return {}, you CANNOT.
  // getDefaultProps: function () {
  //   totalSeconds: 0  // default of 0
  // },
  getDefaultProps: function () {
    return {
      totalSeconds: 0,  // default of 0
    }
  },
  propTypes: {
    totalSeconds: React.PropTypes.number,
  },
  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60; // remainder off 60 seconds/minute
    var minutes = Math.floor(totalSeconds / 60); // round down to nearest whole minute

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  },
  render: function () {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
