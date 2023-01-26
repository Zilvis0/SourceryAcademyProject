import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PageLayout.module.scss';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ROUTES from '../../app/routes';

const cn = classNames.bind(styles);

export default function PageLayout({ children }) {
  const { pathname } = useLocation();

  const path = ROUTES.find((route) => route.path === pathname);

  useEffect(() => {
    if (!path) {
      document.title = 'Not Found';
    } else {
      document.title = path.title;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={cn('page-layout')}>
      <Header className={cn('page-layout__header')} />
      <main className={cn('page-layout__main')}>{children}</main>
      <Footer className={cn('page-layout__footer')} />
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
