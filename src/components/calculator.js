import React from "react";
import Mode from "./mode.js";
import Buttons from "./buttons.js";
import Display from "./display.js";
import Type from "./type.js";
function Calculator(props){
  return (
    <>
      <Display />
      <Buttons MODE={props.MODE}/>
      <Type />
      <Mode />
    </>
  );
}
export default Calculator
