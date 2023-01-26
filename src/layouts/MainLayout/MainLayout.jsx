import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

const cn = classNames.bind(styles);

export default function MainLayout({ theme, children }) {
  return (
    <div className={cn('main-layout', theme)}>
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

MainLayout.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node,
};
