import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AboutMainLayout.module.scss';

const cn = classNames.bind(styles);

export default function AboutMainLayout({ children }) {
  return (
    <div className={cn('main-layout')}>
      {Children.map(children, (child, index) => (
        <section
          className={cn(
            index !== 0 ? 'main-layout__section' : 'main-layout__hero'
          )}
        >
          {child}
        </section>
      ))}
    </div>
  );
}

AboutMainLayout.propTypes = {
  children: PropTypes.node,
};
