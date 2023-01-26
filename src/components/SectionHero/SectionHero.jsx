import React from 'react';
import styles from './SectionHero.module.scss';
import classNames from 'classnames/bind';
import { genericHashLink } from 'react-router-hash-link';
import Button from '@components/Button';
import HomeHeroIllustration from './svgs';

const cn = classNames.bind(styles);
const HashButton = genericHashLink(Button);

export default function SectionHero() {
  return (
    <div className={cn('hero')}>
      <div className={cn('hero__content')}>
        <h2 className={cn('hero__content-heading')}>Sourcery Academy</h2>
        <p className={cn('hero__content-description')}>
          Sourcery academy is our free of charge education program created to
          allow students to improve their skills and prepare for a career in the
          IT industry. There are three academies available. They serve as our
          long- term commitment to increase the number of students in Lithuania
          entering information technologies studies.
        </p>

        <HashButton to="#academies" smooth>
          View academies
        </HashButton>
      </div>

      <HomeHeroIllustration className={cn('hero__illustration')} />
    </div>
  );
}
