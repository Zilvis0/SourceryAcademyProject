import React from 'react';
import styles from './StepCard.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function StepCard({ children, reverse, title, description }) {
  return (
    <article className={cn('step-card', { 'step-card--reverse': reverse })}>
      <div className={cn('step-card__content')}>
        <h3 className={cn('step-card__heading')}>{title}</h3>
        <p className={cn('step-card__description')}>{description}</p>
      </div>

      <div className={cn('step-card__illustration')}>{children}</div>
    </article>
  );
}

StepCard.propTypes = {
  children: PropTypes.element.isRequired,
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
