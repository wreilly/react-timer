var React = require('react');

// going to get passed the countdownStatus (a PROP)
var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  // CURRYING
  // Function which returns a function ...
  onStatusChange: function (newStatus) {
    // one function for all button clicks (Start. Pause. Stop)
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
      var {countdownStatus} = this.props;

      // pas encore, babe.
      console.log("WR__ 03 Controls.jsx RENDER: this.props.countdownStatus: ", this.props.countdownStatus);


      var renderStartStopButton = ()  =>  {
        if (countdownStatus === 'started') {
          return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause!</button>
        } else if (countdownStatus === 'paused') {
          return <button className="button primary" onClick={this.onStatusChange('started')}>Start!</button>
        }
      };

      // Recall: you cannot have conditional markup here inside
      // the JSX component's return ({ }) .
      // You need a function
      // (above), which you call from here ...
      return (
        <div className="controls">
          {renderStartStopButton()}
          <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear!</button>
        </div>
      )
  }

});

module.exports = Controls;
