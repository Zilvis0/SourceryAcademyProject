import React, { useEffect } from 'react';
import Aos from 'aos';
import styles from './SectionAdmission.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import CalendarCard from '@components/CalendarCard';
import Loader from '@components/Loader';
import StarsWrapper from '@components/StarsWrapper';
import useFetch from '@hooks/useFetch';
import { AdmissionIllustration, Wave } from './svgs';
import { END_POINT, ADMISSION_STARS } from './constants';

const cn = classNames.bind(styles);

export default function SectionAdmission({ texts, academy }) {
  const { data: dates, error, isLoading } = useFetch(END_POINT + academy);
  const { heading, introduction, subjects, interview, calendar } = texts;

  let calendarDates;

  useEffect(() => {
    Aos.init();
  }, []);

  if (isLoading) {
    calendarDates = <Loader />;
  } else if (error) {
    calendarDates = <span>{error}</span>;
  } else {
    calendarDates = (
      <ul className={cn('admission-calendar__list')}>
        {dates.map((date, index) => (
          <li key={index}>
            <CalendarCard from={date.from} to={date.to}>
              {date.title}
            </CalendarCard>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={cn('admission')}>
      <div className={cn('admission-calendar__stars-wrapper')}>
        <StarsWrapper starCoordinates={ADMISSION_STARS} />
      </div>

      <article className={cn('admission-content')}>
        <h2 className={cn('admission-content__heading')}>{heading}</h2>

        <section>
          <h3 className={cn('admission-content__title')}>
            {introduction.title}
          </h3>
          <p className={cn('admission-content__text')}>
            {introduction.description}
          </p>
        </section>

        <section>
          <h3 className={cn('admission-content__title')}>{subjects.title}</h3>
          <ul
            className={cn('admission-content__text', 'admission-content__list')}
          >
            {subjects?.list.map((item, index) => (
              <li key={index} className={cn('admission-content__list-item')}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className={cn('admission-content__title')}>{interview.title}</h3>
          <p className={cn('admission-content__text')}>
            {interview.description}
          </p>
        </section>
      </article>

      <aside className={cn('admission-calendar')}>
        <h3 className={cn('admission-calendar__title')}>{calendar.title}</h3>

        <div className={cn('admission-calendar__events')}>
          <div data-aos="wave-animation" data-aos-once={true}>
            <Wave className={cn('admission-calendar__wave')} />
          </div>
          {calendarDates}
        </div>
      </aside>

      <AdmissionIllustration
        className={cn('admission-calendar__illustration')}
      />
    </div>
  );
}

SectionAdmission.propTypes = {
  texts: PropTypes.object.isRequired,
  academy: PropTypes.string.isRequired,
};
