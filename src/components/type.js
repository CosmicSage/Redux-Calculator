import React from "react";
import { connect } from "react-redux";
import { clear } from "../redux/actions.js"
const Button = props => {
  if (props.type) {
    return (
      <div style={{display : "flex", flexDirection : "row"}}>
      <button className={`btn btn-${props.MODE.toLowerCase()}`} onClick={() => {
        let update = props.result*props.result
        props.function(update)
      }}>Square</button>
      <button className={`btn btn-${props.MODE.toLowerCase()}`} onClick={() => {
        props.function(Math.sqrt(props.result))
      }}>Root</button>
      <button className={`btn btn-${props.MODE.toLowerCase()}`} onClick={() => {
        let update = 0;
        if (props.result < 0) update = Math.abs(props.result)
        update = -props.result;
        props.function(update);
      }}>Invert</button>
      </div>
    )
  }
  return <p></p>;
}
class Type extends React.Component {
  state = {
    type : false
  }
  render() {
    return (
      <>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
        <label className="custom-control-label" for="customCheck1" onClick={() => {
          this.setState({type : !this.state.type});
        }}>Scientific</label>
      </div>
      <p>(Pro Tip : Press AC first to ensure smooth operations & press '=' to see the effect of Sci buttons)</p>
      <div>
        <Button type={this.state.type} function={this.props.clear} MODE={this.props.MODE} result={this.props.RESULT}/>
      </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  MODE : state.MODE,
  RESULT : state.RESULT
})
export default connect(mapStateToProps, {clear : clear})(Type);
