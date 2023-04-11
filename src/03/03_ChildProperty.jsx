import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ChildProperty.propTypes = {
  children: PropTypes.node, // 컴포넌트 하위에 배치한 노드(또는 컴포넌트)에 접근하는 방법: PropTypes.node로 설정해주기
};

export default ChildProperty;
