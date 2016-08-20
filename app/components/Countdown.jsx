var React = require('react');
var Clock = require('Clock');

var Countdown = (props) => {
  return (
    <div>
      <p>The Countdown component is here on screen.</p>
      <Clock totalSeconds={129} />
    </div>
  )
};

module.exports = Countdown;
