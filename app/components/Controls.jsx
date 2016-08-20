var React = require('react');

// going to get passed the countdownStatus (a PROP)
var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
      var {countdownStatus} = this.props;

      // pas encore, babe.
      console.log("WR__ 03 Controls.jsx RENDER: this.props.countdownStatus: ", this.props.countdownStatus);


      var renderStartStopButton = ()  =>  {
        if (countdownStatus === 'started') {
          return <button className="button secondary">Pause!</button>
        } else if (countdownStatus === 'paused') {
          return <button className="button primary">Start!</button>
        }
      };

      // Recall: you cannot have conditional markup here inside
      // the JSX component's return ({ }) .
      // You need a function
      // (above), which you call from here ...
      return (
        <div className="controls">
          {renderStartStopButton()}
          <button className="button alert hollow">Clear!</button>
        </div>
      )
  }

});

module.exports = Controls;
