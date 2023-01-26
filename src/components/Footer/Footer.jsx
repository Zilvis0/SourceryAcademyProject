import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Facebook, Instagram, Twitter } from './svgs';

const cn = classNames.bind(styles);

export default function Footer({ className }) {
  return (
    <footer className={cn('footer', className)}>
      <ul className={cn('social-icons')}>
        <li className={cn('social-icon-bubble')}>
          <a className={cn('social-link')} href="#">
            <Facebook className={cn('social-icon')} />
          </a>
        </li>
        <li className={cn('social-icon-bubble')}>
          <a className={cn('social-link')} href="#">
            <Twitter className={cn('social-icon')} />
          </a>
        </li>
        <li className={cn('social-icon-bubble')}>
          <a className={cn('social-link')} href="#">
            <Instagram className={cn('social-icon')} />
          </a>
        </li>
      </ul>
      <p className={cn('copyright')}>
        Copyright &copy; {new Date().getFullYear()} Sourcery Academy
      </p>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
