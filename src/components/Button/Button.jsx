import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

const Button = forwardRef(function Button(
  { children, icon, ariaKeyShortcuts, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn({ btn: !icon, icon: icon })}
      aria-keyshortcuts={ariaKeyShortcuts}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  ariaKeyShortcuts: PropTypes.string,
};
