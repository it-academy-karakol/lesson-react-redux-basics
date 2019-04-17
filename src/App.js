import React from "react";
import { connect } from "react-redux";

import "./styles.css";

import CounterOutput from "./CounterOutput/CounterOutput";
import CounterControls from "./CounterControls/CounterControls";

// Step 4. Use props instead of state.
const App = props => (
  <div className="App">
    <CounterOutput counter={props.counter} />
    <CounterControls setCounter={props.onCounterChange} />
  </div>
);

// Step 3. Link component with store.
// this.state... => this.props
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};
// this.setState(...) => this.props
const mapDispatchToProps = dispatch => {
  return {
    onCounterChange: value => dispatch({ type: "CHANGE", value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
