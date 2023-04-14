import React from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
  const { displayname, name: componentName } = WrappedComponent;
  const WrappedComponentName = displayname || componentName;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context;
    return <WrappedComponent {...props} loading={loading} setLoading={setLoading} />;
  }
  WithLoadingContext.displayname = `withLoadingContext(${WrappedComponentName})`;
  WithLoadingContext.contextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
  };
  return WithLoadingContext;
};
