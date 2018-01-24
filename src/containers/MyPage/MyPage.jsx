/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../../actions/action'


class MyPage extends Component {
  constructor(props) {
    super(props)
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onIncrementIfOdd = this.onIncrementIfOdd.bind(this)
    this.onIncrementAsync = this.onIncrementAsync.bind(this)
  }
  componentWillMount() {
    this.setState({
      value: 0,
    })
  }
  onIncrement() {
    this.props.action({
      type: 'INCREMENT'
    })
  }
  onDecrement() {
    this.props.action({
      type: 'DECREMENT'
    })
  }
  onIncrementIfOdd() {
    this.props.action({
      type: 'INCREMENT_IF_ODD'
    })
  }
  onIncrementAsync() {
    this.props.action({
      type: 'INCREMENT_ASYNC'
    })
  }
  render() {
    console.log(this.props)
    const {count} = this.props
    const {onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync} = this
    return (
      <p>
         Clicked: {count} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={onIncrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

export default connect((state) => ({count: state}),{action})(MyPage)
