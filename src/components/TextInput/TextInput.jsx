import React from 'react';
import styles from './TextInput.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function TextInput({
  label,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  required,
  error,
  autoComplete,
}) {
  return (
    <div className={cn('text-input')}>
      <label
        htmlFor={name}
        className={cn('text-input__label', {
          'text-input__label--required': required,
        })}
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={cn('text-input__field', {
          'text-input__field--has-error': error,
        })}
        required={required}
        aria-describedby={`${name}-error`}
        autoComplete={autoComplete}
      />
      {error && (
        <span id={`${name}-error`} className={cn('text-input__error-msg')}>
          {error}
        </span>
      )}
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  autoComplete: PropTypes.string,
};
