import React from "react";
import { connect } from "react-redux";
import { changeDisplay, clear } from "../redux/actions.js";

const Button = props => (
  <button className={`btn btn-${props.MODE.toLowerCase()}`} onClick={
    () => { props.function(props.value); }}>
    <span style={{fontSize : 60}}>{props.value}</span></button>
);

class Buttons extends React.Component {
  state = {
    NUMBERS : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    OPERATORS : ['+', '-', '*', '/']
  }

  render() {
    return (
      <div style={styles.buttons}>
        {this.state.NUMBERS.map(NUMBER => <Button MODE={this.props.MODE} value={NUMBER} function={this.props.changeDisplay}/> )}
        {this.state.OPERATORS.map(OPERATOR => <Button MODE={this.props.MODE} value={OPERATOR} function={this.props.changeDisplay}/>)}
        <button className={`btn btn-${this.props.MODE.toLowerCase()}`} onClick={() => {
          this.props.clear(this.props.RESULT)
        }}><span>=</span></button>
        <button className={`btn btn-${this.props.MODE.toLowerCase()}`} onClick={() => {
          this.props.clear('');
        }}><span>AC</span></button>
      </div>

    );
  }
}
const mapStateToProps = state => ({
  RESULT : state.RESULT
})
export default connect(mapStateToProps, {changeDisplay : changeDisplay, clear : clear})(Buttons);
const styles = {
  buttons : {maxWidth : "30%"}
}
