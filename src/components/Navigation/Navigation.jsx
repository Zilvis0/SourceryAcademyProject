import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Navigation.module.scss';
import { ChevronIcon } from '@components/Icons';
import { BurgerMenu, CloseIcon } from './svgs';

const cn = classNames.bind(styles);

function Navigation() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const navOptionElement = useRef();
  const hashLinkTimer = useRef();
  const { pathname } = useLocation();

  const handlerDropDown = (e) => {
    if (!navOptionElement.current.contains(e.target)) {
      setIsDropDownOpen(false);
    } else {
      setIsDropDownOpen((prev) => !prev);
    }
  };

  const handleHashLinkScroll = (element) => {
    clearTimeout(hashLinkTimer.current);

    hashLinkTimer.current = setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const addActiveLink = (state, ...rest) => {
    return cn(rest, state.isActive && 'navigation__link--active');
  };

  useEffect(() => {
    document.addEventListener('click', handlerDropDown);

    return () => {
      document.removeEventListener('click', handlerDropDown);
    };
  }, []);

  useEffect(() => {
    return isBurgerOpen
      ? document.body.classList.add(cn('no-scroll'))
      : document.body.classList.remove(cn('no-scroll'));
  }, [isBurgerOpen]);

  return (
    <>
      <button
        className={cn('menu-button')}
        onClick={() => setIsBurgerOpen((prev) => !prev)}
      >
        {isBurgerOpen ? <CloseIcon /> : <BurgerMenu />}
      </button>
      <nav
        className={cn(
          'navigation',
          { 'navigation--expanded': isBurgerOpen },
          { 'navigation--burger-closed': !isBurgerOpen }
        )}
      >
        <ul className={cn('navigation__wrapper')}>
          <li className={cn('navigation__option')}>
            <NavLink
              className={(state) => addActiveLink(state, 'navigation__link')}
              to="about"
              onClick={() => setIsBurgerOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li
            className={cn(
              'navigation__option',
              'navigation__option--expandable'
            )}
          >
            <div ref={navOptionElement} className={cn('expandable-item')}>
              <span
                className={cn('expandable-item__option', {
                  'navigation__link--active': pathname.includes('academies'),
                })}
              >
                Academies
              </span>
              <ChevronIcon
                className={cn('chevron-down', { rotation: isDropDownOpen })}
              />
            </div>

            <ul
              className={cn('dropdown', {
                'dropdown--close': !isDropDownOpen,
              })}
            >
              <li className={cn('dropdown__item')}>
                <NavLink
                  className={(state) => addActiveLink(state, 'dropdown__link')}
                  to="academies/developers"
                  onClick={() => setIsBurgerOpen(false)}
                >
                  Sourcery for Developers
                </NavLink>
              </li>
              <li className={cn('dropdown__item')}>
                <NavLink
                  className={(state) => addActiveLink(state, 'dropdown__link')}
                  to="academies/testers"
                  onClick={() => setIsBurgerOpen(false)}
                >
                  Sourcery for Testers
                </NavLink>
              </li>
              <li className={cn('dropdown__item')}>
                <NavLink
                  className={(state) => addActiveLink(state, 'dropdown__link')}
                  to="academies/frontend"
                  onClick={() => setIsBurgerOpen(false)}
                >
                  Sourcery for Front-End
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={cn('navigation__option')}>
            <HashLink
              className={cn('navigation__link')}
              onClick={() => setIsBurgerOpen(false)}
              to={pathname === '/registration' ? '/#media' : '#media'}
              scroll={handleHashLinkScroll}
            >
              Media
            </HashLink>
          </li>
          <li className={cn('navigation__option')}>
            <NavLink
              className={(state) => addActiveLink(state, 'navigation__link')}
              to="registration"
              onClick={() => setIsBurgerOpen(false)}
            >
              Register
            </NavLink>
          </li>
          <li className={cn('navigation__option')}>
            <NavLink
              className={(state) => addActiveLink(state, 'navigation__link')}
              to="questions"
              onClick={() => setIsBurgerOpen(false)}
            >
              Questions
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
