import React, { useEffect } from 'react';
import Aos from 'aos';
import classNames from 'classnames/bind';
import styles from './SectionTeamOutro.module';
import { OutroIllustration, OutroWave } from './svgs';

const cn = classNames.bind(styles);

export default function SectionTeamOutro() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="wave-animation"
      data-aos-once={true}
      data-aos-anchor-placement="top-center"
      className={cn('section-team-outro')}
    >
      <OutroWave className={cn('section-team-outro__wave')} />
      <OutroIllustration className={cn('section-team-outro__illustration')} />
    </div>
  );
}
