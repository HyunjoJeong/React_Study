import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, nodeValue, funcValue, objValue } = this.props; // 프로퍼티에 전달된 값들을 지역 변수로 재정의 한 것 뿐임. 이 컴포넌트의 프로퍼티 목록 처럼 쓸 수도 있어 정의하는 것을 추천
    return (
      <div>
        <span>불리언 값: {boolValue}</span>
        <span>숫자값: {numValue}</span>
        <span>배열값: {arrayValue}</span>
        <span>노드값: {nodeValue}</span>
        <span>함수값: {String(funcValue)}</span>
        <span>객체값: {String(objValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number.isRequired, // 필수 프로퍼티로 지정하기
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

ChildComponent.defaultProps = {
  // 프로퍼티의 기본값 정의
  boolValue: false,
};

export default ChildComponent;
