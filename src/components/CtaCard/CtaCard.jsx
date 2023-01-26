import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CtaCard.module';
import Button from '@components/Button';

const cn = classNames.bind(styles);

export default function CtaCard({ path, texts, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className={cn('cta-card')}>
      <div className={cn('cta-card__stars-wrapper')}>{children}</div>

      <h2 className={cn('cta-card__title')}>{texts.title}</h2>
      <p className={cn('cta-card__description')}>{texts.description}</p>

      <Button onClick={handleClick}>{texts.buttonText}</Button>
    </div>
  );
}

CtaCard.propTypes = {
  path: PropTypes.string,
  texts: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
  }),
  children: PropTypes.node,
};
