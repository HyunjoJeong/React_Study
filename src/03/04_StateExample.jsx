import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);

    // state는 반드시 생성자에서 초기화해야 한다. 마땅한 초기값이 없다면 state에 빈 객체 {}라도 넣어야 한다.
    // 아래 방법은 state 객체 변수를 생성해 각 요소의 값을 초기화하는 방법
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';

    // state 값을 변경할때는 반드시 setState 함수를 사용해야 하고, setState 함수는 비동기로 처리되기 때문에 setState 를 한다고 바로 화면에 표현되는 것은 아니다.
    this.setState({
      loading: false,
      formData: data,
    });
    console.log('loading값: ' + this.state.loading);
  }
  render() {
    return (
      <div>
        <span>로딩 중: {String(this.state.loading)}</span>
        <br />
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
