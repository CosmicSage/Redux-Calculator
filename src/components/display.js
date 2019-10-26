import React from "react";
import { connect } from "react-redux";
import store from "../redux/store.js";
import {changeResult} from "../redux/actions.js";
function makeNumber(list) {
  let next_number = "";
  for (var i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') next_number += list[i];
    else return [next_number, i];
  }
  return [next_number, i];
}
function calculateResult(list) {
  let next_number = ''
  for (var i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') next_number += list[i];

    else if (typeof list[i] === "string") {
      let New = makeNumber(list.slice(i + 1))
      var final = eval(`${next_number} ${list[i]} ${New[0]}`);
      i = i + New[1];
      next_number = `${final}`
    }
  }
  store.dispatch(changeResult(final));
  return final;
}

class Display extends React.Component {
  render() {
    var result = 0;
    try {
      result = calculateResult(this.props.DISPLAY);
    }
    catch (e) {
      result = "Invalid Math Operation! Try Again";
      store.dispatch(changeResult(this.props.DISPLAY));
    }
    return (
      <>
        <p>{this.props.DISPLAY || ''}</p>
        <p>{result}</p>
      </>

    );
  }
}
const mapStateToProps = state => ({
  DISPLAY : state.DISPLAY
})
export default connect(mapStateToProps)(Display);
