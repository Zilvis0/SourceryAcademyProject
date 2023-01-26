import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const cn = classNames.bind(styles);

export default function Select({
  options,
  name,
  error,
  label,
  placeholder,
  required,
  ...rest
}) {
  return (
    <div className={cn('select')}>
      <label
        className={cn('select__label', { 'select__label--required': required })}
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className={cn('select__element', {
          'select__element--has-error': error,
        })}
        name={name}
        id={name}
        required={required}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {error && <span className={cn('select__error')}>{error}</span>}
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
