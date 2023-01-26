import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module';
import Button from '@components/Button';
import Illustration from './svgs';

const cn = classNames.bind(styles);

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <section className={cn('error-page')}>
      <div className={cn('error-page__text')}>
        <h1 className={cn('error-page__heading')}>Not Found </h1>
        <p className={cn('error-page__description')}>
          Oh well. The page you were looking for is not here. Try again.
        </p>
        <Button onClick={handleNavigate}>Go to homepage</Button>
      </div>
      <div className={cn('error-page__illustration')}>
        <Illustration />
      </div>
    </section>
  );
}
