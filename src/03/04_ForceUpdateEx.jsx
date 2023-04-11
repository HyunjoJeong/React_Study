import React, { Component } from 'react';

class ForceUpdateEx extends Component {
  constructor(props) {
    super(props);

    // 아래와 같이 state 객체 변수를 만들지 않고 그냥 constructor에서 초기화하는 this.변수는 state로 쓸 수 있음(?)
    // property와 차이점? : property는 속성의 형태로 위에서 아래로 전달..
    this.loading = true;
    this.formData = 'no data';

    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';

    this.loading = false;
    this.formData = data;
    this.forceUpdate(); // forceUpdate는 함수가 호출될 때 즉시 화면을 출력한다. 하지만 리액트 성능에 제약이 있으므로, 꼭 필요한 경우가 아니면 쓰지 말자..
  }
  render() {
    return (
      <div>
        <span>로딩 중: {String(this.loading)}</span>
        <br />
        <span>결과: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateEx;
