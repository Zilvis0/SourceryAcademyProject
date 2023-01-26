import React from 'react';
import styles from './InputsGroup.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function InputsGroup({
  inputs,
  legend,
  name,
  onChange,
  onBlur,
  value: currentValue,
  error,
  secondary,
  required,
}) {
  return (
    <fieldset className={cn('inputs-group')}>
      <legend
        className={cn('inputs-group__legend', {
          'inputs-group__legend--required': required,
        })}
      >
        {legend}
      </legend>

      <div
        className={cn({
          'default-inputs': !secondary,
          'secondary-inputs': secondary,
        })}
      >
        {inputs?.map(({ value, label, id }, index) => (
          <div key={index} className={cn('input-wrapper')}>
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              className={cn({
                'default-inputs__input': !secondary,
                'secondary-inputs__input': secondary,
              })}
              onChange={onChange}
              onBlur={onBlur}
              checked={currentValue === value}
            />

            <label
              htmlFor={id}
              className={cn({
                'default-inputs__label': !secondary,
                'secondary-inputs__label': secondary,
              })}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      {error && <span className={cn('inputs-group__error')}>{error}</span>}
    </fieldset>
  );
}

InputsGroup.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  secondary: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
};
