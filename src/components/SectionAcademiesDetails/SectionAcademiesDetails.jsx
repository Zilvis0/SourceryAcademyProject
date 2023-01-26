import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SectionAcademiesDetails.module';
import {
  DevelopersIllustration,
  TestersIllustration,
  FrontEndIllustration,
  DevelopersLine,
  TestersLine,
  FrontEndLine,
  KidsIllustration,
} from './svg';
import CtaCard from '@components/CtaCard';
import StarsWrapper from '@components/StarsWrapper';
import {
  ACADEMIES_DETAILS_STARS,
  DEVELOPERS_DETAILS_STARS,
  FRONTEND_DETAILS_STARS,
  KIDS_DETAILS_STARS,
  TESTERS_DETAILS_STARS,
} from './constants';
import Aos from 'aos';

const cn = classNames.bind(styles);

export default function SectionAcademiesDetails({ texts }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="academiesDetails" className={cn('section-academies-details')}>
      <div className={cn('section-academies-details__stars-wrapper')}>
        <StarsWrapper starCoordinates={ACADEMIES_DETAILS_STARS} />
      </div>

      <section className={cn('academy-section', 'academy-section-developers')}>
        <div data-aos="fade-right" data-aos-once={true}>
          <CtaCard path="academies/developers" texts={texts.developers}>
            {DEVELOPERS_DETAILS_STARS.map((coordinates, index) => (
              <StarsWrapper key={index} starCoordinates={coordinates} />
            ))}
          </CtaCard>
        </div>

        <div
          data-aos="fade-left"
          data-aos-once={true}
          className={cn('academy-section__graphics')}
        >
          <DevelopersIllustration
            className={cn('academy-section-developers__illustration')}
          />

          <div data-aos="wave-animation" data-aos-once={true}>
            <DevelopersLine
              className={cn(
                'academy-section__wave',
                'academy-section-developers__wave-position'
              )}
            />
          </div>
        </div>
      </section>

      <section className={cn('academy-section', 'academy-section-testers')}>
        <div data-aos="fade-left" data-aos-once={true}>
          <CtaCard path="academies/testers" texts={texts.testers}>
            {TESTERS_DETAILS_STARS.map((coordinates, index) => (
              <StarsWrapper key={index} starCoordinates={coordinates} />
            ))}
          </CtaCard>
        </div>

        <div
          data-aos="fade-right"
          data-aos-once={true}
          className={cn('academy-section__graphics')}
        >
          <TestersIllustration
            className={cn('academy-section-testers__illustration')}
          />

          <div data-aos="wave-animation" data-aos-once={true}>
            <TestersLine
              className={cn(
                'academy-section__wave',
                'academy-section-testers__wave-position'
              )}
            />
          </div>
        </div>
      </section>

      <section className={cn('academy-section', 'academy-section-frontend')}>
        <div data-aos="fade-left" data-aos-once={true}>
          <CtaCard path="academies/frontend" texts={texts.frontend}>
            {FRONTEND_DETAILS_STARS.map((coordinates, index) => (
              <StarsWrapper key={index} starCoordinates={coordinates} />
            ))}
          </CtaCard>
        </div>

        <div
          data-aos="fade-right"
          data-aos-once={true}
          className={cn('academy-section__graphics')}
        >
          <FrontEndIllustration
            className={cn('academy-section-frontend__illustration')}
          />
        </div>
      </section>

      <section className={cn('academy-section', 'academy-section-kids')}>
        <div data-aos="fade-right" data-aos-once={true}>
          <CtaCard path="academies/kids" texts={texts.kids}>
            {KIDS_DETAILS_STARS.map((coordinates, index) => (
              <StarsWrapper key={index} starCoordinates={coordinates} />
            ))}
          </CtaCard>
        </div>

        <div
          data-aos="fade-left"
          data-aos-once={true}
          className={cn('academy-section__graphics')}
        >
          <KidsIllustration
            className={cn('academy-section-kids__illustration')}
          />

          <div data-aos="wave-animation" data-aos-once={true}>
            <FrontEndLine
              className={cn(
                'academy-section__wave',
                'academy-section-kids__wave-position'
              )}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

SectionAcademiesDetails.propTypes = {
  texts: PropTypes.shape({
    developers: PropTypes.object,
    testers: PropTypes.object,
    frontend: PropTypes.object,
    kids: PropTypes.object,
  }),
};
