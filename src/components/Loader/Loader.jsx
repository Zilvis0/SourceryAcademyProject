import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loader.module.scss';

const cn = classNames.bind(styles);

export default function Loader() {
  return (
    <div className={cn('spinner-wrapper')}>
      <div className={cn('spinner')}></div>
    </div>
  );
}
