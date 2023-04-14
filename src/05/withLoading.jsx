import React from 'react';

export default function withLoading(WrappedComponent) {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoading({ isLoading, ...otherProps }) {
    //함수형 컴포넌트
    if (isLoading) return '로딩 중';
    return <WrappedComponent {...otherProps} />;
  }
  WithLoading.displayName = 'withLoading(${wrappedComponentName})';
  return WithLoading;
}
