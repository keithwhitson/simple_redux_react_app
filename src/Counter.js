import React, { Component } from "react"
import { connect } from "react-redux"

const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

const increaseAction = () => {
  return {
    type: INCREASE
  }
}

const decreaseAction = () => {
  return {
    type: DECREASE
  }
}

const mapStateToProps = (state) => {
  return {
    countValue: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction)
    }
  }
}
 
class Counter extends Component {
  render() {
    return (
      <div className="container">
        <button className="buttons"
                onClick={this.props.decreaseCount}>-</button>
        <span>{this.props.countValue}</span>
        <button className="buttons"
                onClick={this.props.increaseCount}>+</button>
      </div>
    );
  }
}
 
const connectedComponent =  connect(mapStateToProps, mapDispatchToProps)(Counter)
export default connectedComponent