import React from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from "./components/calculator.js";

function App(props) {
  console.log(props.state);
  let MAIN_STYLE = {...styles.center, ...styles[props.MODE.toLowerCase()]}
  return (
    <div style={MAIN_STYLE}>
      <Calculator MODE={props.MODE}/>
    </div>
  );
}
const mapStateToProps = state => ({
  MODE : state.MODE,
  state : state
})
export default connect(mapStateToProps)(App);

const styles = {
  center : {
    display : "flex", justifyContent : "center", alignItems : "center", height : "100vh", flexDirection : "column"
  },
  light : { backgroundColor : "#fff", color : "#000"}, dark : { backgroundColor : "#000", color : "#fff"}
}
