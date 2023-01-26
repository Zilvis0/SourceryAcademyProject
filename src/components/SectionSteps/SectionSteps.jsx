import React, { useEffect } from 'react';
import Aos from 'aos';
import styles from './SectionSteps.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import StepCard from '@components/StepCard';
import { AdmissionIllustration } from '@components/Icons';
import StarsWrapper from '@components/StarsWrapper';
import {
  LearnIllustration,
  ApplyIllustration,
  CompanyIllustration,
  Wave,
} from './svgs';
import { STEPS_STARS } from './constants';

const cn = classNames.bind(styles);

export default function SectionSteps({ texts }) {
  const { apply, admission, learn, company } = texts;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={cn('step-section')}>
      <div className={cn('step-section__stars-wrapper')}>
        {STEPS_STARS.map((coordinates, index) => (
          <StarsWrapper key={index} starCoordinates={coordinates} />
        ))}
      </div>

      <div className={cn('grid-layout')}>
        <StepCard title={apply.title} description={apply.description}>
          <ApplyIllustration
            className={cn(
              'step-section__illustration',
              'step-section__illustration--apply-moved'
            )}
          />
        </StepCard>

        <StepCard
          title={admission.title}
          description={admission.description}
          reverse
        >
          <AdmissionIllustration
            className={cn(
              'step-section__illustration',
              'step-section__illustration--admission-moved'
            )}
          />
        </StepCard>

        <StepCard title={learn.title} description={learn.description}>
          <LearnIllustration
            className={cn(
              'step-section__illustration',
              'step-section__illustration--learn-moved'
            )}
          />
        </StepCard>

        <StepCard
          title={company.title}
          description={company.description}
          reverse
        >
          <CompanyIllustration
            className={cn(
              'step-section__illustration',
              'step-section__illustration--company-moved'
            )}
          />
        </StepCard>
      </div>

      <div data-aos="wave-animation" data-aos-once={true}>
        <Wave className={cn('step-section__wave')} />
      </div>
    </div>
  );
}

SectionSteps.propTypes = {
  texts: PropTypes.object.isRequired,
};
