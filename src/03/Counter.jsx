import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count }; // 이때만(생성될 때에만) 상위 컴포넌트로부터 받은 count값을 받을 뿐, 그 뒤로는 상위 컴포넌트의 count 변화가 이 컴포넌트의 변화로 이어지지 않음.
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
    //  this.setState({ count: this.state.count + 1 }); // 이렇게 해도 같은 결과인데.. 위처럼 하는 이유는 뭘까?
  }
  render() {
    return (
      <div>
        <span>현재 카운트: {this.state.count} </span>
        <button onClick={this.increaseCount}>Push!</button>
      </div>
    );
  }
}

export default Counter;
