import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './RegistrationMessage.module.scss';

const cn = classNames.bind(styles);

export default function RegistrationMessage({ message, children }) {
  return (
    <div className={cn('registration-message')}>
      {children}
      <h2 className={cn('registration-message__title')}>{message.title}</h2>
      <p className={cn('registration-message__description')}>
        {message.description}
      </p>
    </div>
  );
}

RegistrationMessage.propTypes = {
  message: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  children: PropTypes.element.isRequired,
};
