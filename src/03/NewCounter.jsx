import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    // 내장함수, state에 변경이 있을 시 호출됨 (render 전에) 자세한 내용은 114~115 페이지 참고.
    // props는 상위 컴포넌트로부터 받은 값, state는 이 컴포넌트의 '현재(=변경 전)' state.
    // 반환값은 state의 변경
    const { count } = props; // count state에는 상위 컴포넌트의 count 값이 저장됨.
    return {
      count,
      newCount: count === state.count ? state.newCount : count, // 상위 컴포넌트의 count와 현재 컴포넌트의 count가 다르면 (= 상위 컴포넌트의 count 값에 변화가 있으면) newCount를 상위의 count로 업데이트 하고, 아니라면 현재 컴포넌트의 Newcount를 대입.
    };
  }
  increaseCount() {
    this.setState(({ newCount }) => ({ newCount: newCount + 1 }));
  }
  render() {
    return (
      <div>
        <span>현재 카운트: {this.state.newCount} </span>
        <button onClick={this.increaseCount}>Click!</button>
      </div>
    );
  }
}

export default NewCounter;
