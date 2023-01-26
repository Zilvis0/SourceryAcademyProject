import React, { useState } from 'react';
import styles from './RegistrationPage.module.scss';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import ApplyForm from '@components/ApplyForm';
import RegistrationMessage from '@components/RegistrationMessage';
import { AdmissionIllustration } from '@components/Icons';
import { ACADEMIES } from '@shared/constants';
import { ThemeContext } from '@context/ThemeContext';
import StarsWrapper from '@components/StarsWrapper';
import { registrationTexts, formTexts } from './texts';
import { SuccessIcon } from './svgs';
import { STARS } from './constants';

const cn = classNames.bind(styles);

export default function RegistrationPage() {
  const [isSubmited, setIsSubmited] = useState(false);
  const { state: academy } = useLocation();
  const [currentAcademy, setCurrentAcademy] = useState(
    academy?.name || ACADEMIES.DEVELOPERS.name
  );

  const { heading, successMessage } = registrationTexts;

  const handleOnSubmit = () => {
    setIsSubmited(true);
  };

  return (
    <div className={cn('registration', `theme-${currentAcademy}`)}>
      <div className={cn('registration__stars-wrapper')}>
        {STARS.map((stars, index) => (
          <StarsWrapper key={index} starCoordinates={stars} />
        ))}
      </div>

      <h1 className={cn('registration__heading')}>{heading}</h1>

      <section className={cn('registration__content')}>
        <ThemeContext.Provider
          value={{
            currentAcademy,
            setCurrentAcademy,
          }}
        >
          {!isSubmited && (
            <ApplyForm onSubmit={handleOnSubmit} texts={formTexts} />
          )}
        </ThemeContext.Provider>

        {isSubmited && (
          <RegistrationMessage message={successMessage}>
            <SuccessIcon />
          </RegistrationMessage>
        )}
      </section>

      <section className={cn('registration__illustration')}>
        <AdmissionIllustration className={cn('svg-illustration')} />
      </section>
    </div>
  );
}
