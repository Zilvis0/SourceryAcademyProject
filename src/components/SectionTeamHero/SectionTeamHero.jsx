import React, { useEffect } from 'react';
import Aos from 'aos';
import classNames from 'classnames/bind';
import styles from './SectionTeamHero.module';
import { TeamHeroIllustration } from './svgs';
import heroImg from '@assets/images/tom-kha-soup.jpg';

const cn = classNames.bind(styles);

export default function SectionTeamHero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={cn('section-team-hero')}>
      <img
        className={cn('section-team-hero__image')}
        src={heroImg}
        alt="Tom-Kha Soup Image"
      />
      <div data-aos="wave-animation" data-aos-once={true}>
        <TeamHeroIllustration className={cn('section-team-hero__wave')} />
      </div>
    </div>
  );
}
