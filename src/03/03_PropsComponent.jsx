import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
    //{}를 쓰는 이유: 프로퍼티에 값을 전달할 때 문자열은 ""를 쓰지만, 나머지(숫자형, 불리언 등) 값을 전달할 때는 반드시 중괄호를 써야함.
  }
}

// 프로퍼티의 자료형 선언
PropsComponent.propTypes = {
  // p는 소문자, PropsComponent에 propTypes 라는 변수를 생성한 것이지, 라이브러리 임포트 명이 아님.
  name: PropTypes.string,
};

export default PropsComponent;
