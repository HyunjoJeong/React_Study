import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Text extends PureComponent {
  render() {
    const { children, styles, large, xlarge, small, xsmall, primary, secondary } = this.props;
    return (
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
        )}
      >
        {children}
      </span>
    ); // css 함수를 이용해 element에 default 키에 정의된 스타일을 적용
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  xlarge: PropTypes.bool,
  large: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  xsmall: {
    fontSize: size.xs,
  },
  small: {
    fontSize: size.sm,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
