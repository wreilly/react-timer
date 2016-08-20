var React = require('react');

// can't be Stateless Function
var CountdownForm = React.createClass({
  onSubmit: function (event) {
    event.preventDefault();
    var strSeconds = this.refs.seconds.value;

    // regex for all digits:
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = ''; // clear it ... :)
      this.props.onSetCountdown(parseInt(strSeconds, 10)); // base 10. convert String to Integer. Cheers.
    } // hmm, else ... ?
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds, friend" />
          <button className="button expanded">Start!</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
