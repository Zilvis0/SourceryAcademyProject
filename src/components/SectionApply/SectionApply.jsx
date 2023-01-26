import React, { useEffect } from 'react';
import Aos from 'aos';
import styles from './SectionApply.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import StarsWrapper from '@components/StarsWrapper';
import { Wave } from './svgs';
import { APPLY_STARS } from './constants';

const cn = classNames.bind(styles);

export default function SectionApply({ texts, children, academy }) {
  const navigate = useNavigate();

  const { heading, description, buttonText } = texts;

  const handleNavigate = () => {
    navigate('/registration', { state: academy });
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={cn('apply')}>
      <div className={cn('apply__stars-wrapper')}>
        {APPLY_STARS.map((coordinates, index) => (
          <StarsWrapper key={index} starCoordinates={coordinates} />
        ))}
      </div>

      <div className={cn('apply-content')}>
        <h2 className={cn('apply-content__heading')}>{heading}</h2>
        <p className={cn('apply-content__description')}>{description}</p>
        <Button onClick={handleNavigate} type="button">
          {buttonText}
        </Button>
      </div>

      <div className={cn('apply-graphics')}>
        {children}

        <div
          data-aos="wave-animation"
          data-aos-once={true}
          data-aos-anchor-placement="top-center"
        >
          <Wave className={cn('apply-graphics__wave')} />
        </div>
      </div>
    </div>
  );
}

SectionApply.propTypes = {
  texts: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  academy: PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
