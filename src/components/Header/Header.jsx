import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Logo } from '@components/Icons';
import Navigation from '@components/Navigation';

const cn = classNames.bind(styles);

export default function Header({ className }) {
  return (
    <header className={cn('header', className)}>
      <Link to="/" className={cn('header__logo-title')}>
        <Logo />
        Sourcery Academy
      </Link>
      <Navigation />
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
