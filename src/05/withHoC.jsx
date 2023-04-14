import React, { Component } from 'react';

export default function withHoC(WrappedComponent) {
  const { displayName, name } = WrappedComponent;
  const WrappedComponentName = displayName || name;
  return class WithHoC extends Component {
    static displayName = `withHoC(${WrappedComponentName})`;
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
