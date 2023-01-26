import React, { useEffect } from 'react';
import Aos from 'aos';
import styles from './SectionTeamIntro.module.scss';
import classNames from 'classnames/bind';
import { TopWave, BottomWave, RightSide, LeftSide } from './svgs';

const cn = classNames.bind(styles);

export default function SectionTeamIntro() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="wave-animation"
      data-aos-once={true}
      className={cn('team-intro')}
    >
      <LeftSide className={cn('left-side')} />
      <div className={cn('team-intro__container')}>
        <TopWave className={cn('top-wave')} />
        <div className={cn('team-intro__text')}>
          <h1 className={cn('team-intro__heading')}>Tom Kha team</h1>
          <p className={cn('team-intro__description')}>
            Tom Kha is the name of an Asian soup that consists of various
            ingredients that complement each other with their unique flavor.
            That is why we all decided that this name suits us perfectly,
            because all members of the team came from different professions,
            bringing a unique experience and thinking, and of course, lets not
            forget that our mentor is a gourmet of Asian cuisine, so he really
            did not object to such a decision.
          </p>
        </div>
        <BottomWave className={cn('bottom-wave')} />
      </div>
      <RightSide className={cn('right-side')} />
    </div>
  );
}
