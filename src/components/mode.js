import React from "react";
import { connect } from "react-redux";
import { changeMode } from "../redux/actions.js";
const ModeButton = props => (
  <button className={`btn btn-${props.MODE.toLowerCase()}`} onClick={() => {
    props.function(props.MODE)
  }}>{props.MODE}</button>
);

function Mode(props) {
  return (
    <div style={{flexDirection : "row"}}>
      <ModeButton MODE="LIGHT" function={props.changeMode} />
      <ModeButton MODE="DARK" function={props.changeMode} />
    </div>
  );
}

export default connect(null, {changeMode : changeMode})(Mode)
