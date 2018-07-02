import React, { Component} from 'react';
// I faced similar problem with React.PropTypes, as I am using React-16 I found out that React.PropTypes is not supported. So you need to install "prop-types"
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor (props) {
    // 子类在获取this前必须调用super
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd () {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync () {
    setTimeout(this.props.onIncrement, 1000);
  }

  render () {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  // value必须为数字，且必须存在
  value: PropTypes.number.isRequired,
  // onIncrement必须为fucntion，且必须存在
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
