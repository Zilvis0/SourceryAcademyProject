import React from 'react';
import styles from './SectionAcademies.module.scss';
import classNames from 'classnames/bind';
import { genericHashLink } from 'react-router-hash-link';
import { ArrowDown } from '@components/Icons';
import Button from '@components/Button';
import StarsWrapper from '@components/StarsWrapper';
import { ACADEMIES_STARS } from './constants';

const cn = classNames.bind(styles);
const HashButton = genericHashLink(Button);

export default function SectionAcademies() {
  return (
    <div id="academies" className={cn('section-academies')}>
      <div className={cn('section-academies__stars-wrapper')}>
        {ACADEMIES_STARS.map((coordinates, index) => (
          <StarsWrapper key={index} starCoordinates={coordinates} />
        ))}
      </div>

      <h2 className={cn('section-academies__title')}>Academies</h2>
      <p className={cn('section-academies__description')}>
        There are four disciplines available: for developers, testers, front-end
        developers and kids. Academies are taking place in Devbridge Lithuanian
        offices. Students, who are willing to join developers, testers or
        Front-End academies, need to pass the test, prove their best to get an
        invitation to enroll. This rule doesn&apos;t apply to the kids (7 to 12
        years old) academy, the admission is limited only by available number of
        entries.
      </p>

      <HashButton to="#academiesDetails" smooth icon>
        <ArrowDown />
      </HashButton>
    </div>
  );
}
