import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

export default function withValidation(Component) {
  const FormComponent = (props) => {
    const [field, meta] = useField(props);

    const handleFormikOnChange = (event) => {
      field.onChange(event);
      props.onChange?.(event);
    };

    return (
      <Component
        {...field}
        {...props}
        onChange={handleFormikOnChange}
        error={meta.touched && meta.error}
      />
    );
  };

  FormComponent.propTypes = {
    onChange: PropTypes.func,
  };

  return FormComponent;
}
