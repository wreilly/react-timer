var React = require('react');
var Navigation = require('Navigation');

// In Stateless Functional Components ("Arrow") the 'this' is not re-what-evered.
// Therefore, you can (must) drop the 'this.' in front of 'this.props.children'
var Main = (props) => {
    return (
      <div>
        <Navigation></Navigation>
          <div>
            <p>The Main.jsx has rendered ...</p>
            {props.children}
          </div>
      </div>
    )
}

module.exports = Main;

// OLD WAY:
// debugger;
// var Main = React.createClass({
//   render : function () {
//     return (
//       <div>
//         <Nav></Nav>
//         <h2>Main Component header...abc</h2>
//           {/* // Nope:         <p>heck go to /nav <a href="/nav">click</a></p>
//
// https://facebook.github.io/react/tips/children-undefined.html
// this.props.children designates the children being passed onto you by the owner:
// https://facebook.github.io/react/tips/children-props-type.html
// https://facebook.github.io/react/docs/top-level-api.html#react.children
// WR: I guess, in app.jsx, the <Router> business sets up MAIN as
// a top-level (?) component that has as "children": Weather, About, Examples.
//             */}
//           {this.props.children}
//       </div>
//     );
//   }
// });
