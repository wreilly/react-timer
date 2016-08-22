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
  // componentWillReceiveProps: function (newProps) {
  //   console.log("WR__ componentWillReceiveProps - newProps.countdownStatus: ", newProps.countdownStatus);
  // },
  render: function () {
      var {countdownStatus} = this.props;

      // console.log("WR__ 03 Controls.jsx RENDER: this.props.countdownStatus: ", this.props.countdownStatus);


/* Remark viz. Instructor Code: (Lecture 80, 6:40)
He simply removed the "if ('stopped')" from that (first) else if.
Hah! Now the logic really only asks, if you're started, we show 'Pause!'.
Otherwise, we show 'Start!' Done.

My code didn't recognize that, and so I have a NON-DRY second else if.
Sheers.
*/
      var renderStartStopButton = ()  =>  {
        if (countdownStatus === 'started') {
          return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause!</button>
        } else if (countdownStatus === 'paused') {
          return <button className="button primary" onClick={this.onStatusChange('started')}>Start!</button>
        // } // adding one more ELSE, for TIMER component use.
        // For TIMER, at beginning, it's stopped. We need to show 'Start!'
        // Q. Does this break COUNTDOWN ?
        // A. I think it won't. Countdown.jsx doesn't even get to Controls, if status is 'stopped' - it shows the Form instead.
        } else if (countdownStatus === 'stopped') {
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
