import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      onPress,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
    } = this.props;
    return (
      <button
        onClick={onPress}
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
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  xlarge: PropTypes.bool,
  large: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
};
Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};

export default withStyles(({ color, size, unit, responsive }) => ({
  default: {
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: 'pointer',
    [responsive.small]: {
      width: '100%',
    },
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  primary: {
    color: color.white,
    borderColor: color.primary,
    backgroundColor: color.primary,
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
  },
}))(Button);
