import React from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Checkbox({ label, name, onChange, onBlur, error }) {
  return (
    <div className={cn('checkbox')}>
      <label htmlFor={name} className={cn('checkbox__label')}>
        {label}
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={onChange}
          onBlur={onBlur}
          className={cn('checkbox__input', {
            'checkbox__input--has-error': error,
          })}
          aria-describedby={`${name}-error`}
        />
      </label>
      {error && (
        <span id={`${name}-error`} className={cn('checkbox__error-msg')}>
          {error}
        </span>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
