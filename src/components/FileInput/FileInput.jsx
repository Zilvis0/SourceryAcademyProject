import React, { useState } from 'react';
import styles from './FileInput.module.scss';
import classNames from 'classnames/bind';
import UploadIcon from './svgs/UploadIcon';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function FileInput({
  onUpload,
  onBlur,
  placeholder,
  label,
  name,
  required,
  error,
  inputAccept,
}) {
  const [fileName, setFileName] = useState(placeholder);

  const handleOnChange = (e) => {
    const fileUploaded = e.target.files[0];
    setFileName(fileUploaded.name);
    onUpload(name, fileUploaded);
  };

  return (
    <div className={cn('input__wrapper')}>
      <label
        className={cn('input__label', {
          'input__label--required': required,
        })}
      >
        {label}
      </label>
      <label
        htmlFor={name}
        className={cn('input__field', { 'input--has-error': error })}
      >
        {fileName}
        <UploadIcon className={cn('upload__icon')} />
        <input
          onChange={handleOnChange}
          onBlur={onBlur}
          accept={inputAccept}
          type="file"
          id={name}
          className={cn('file__input')}
          name={name}
        />
      </label>
      <span id={`${name}-error`} className={cn('input__error-msg')}>
        {error}
      </span>
    </div>
  );
}

FileInput.propTypes = {
  onUpload: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string,
  inputAccept: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
};
