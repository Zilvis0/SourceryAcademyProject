import React, { useEffect } from 'react';
import Aos from 'aos';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SectionSchedule.module.scss';
import useFetch from '@hooks/useFetch';
import Loader from '@components/Loader';
import ScheduleMonths from '@components/ScheduleMonths';
import StarsWrapper from '@components/StarsWrapper';
import Line from './svg/Line';
import { END_POINT, SCHEDULE_STARS } from './constants';

const cn = classNames.bind(styles);

export default function SectionSchedule({ academy }) {
  const { data, isLoading, error } = useFetch(END_POINT + academy);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={cn('schedule')}>
      <div className={cn('schedule__stars-wrapper')}>
        {SCHEDULE_STARS.map((coordinates, index) => (
          <StarsWrapper key={index} starCoordinates={coordinates} />
        ))}
      </div>

      <h2 className={cn('schedule__heading')}>Schedule</h2>
      <div className={cn('schedule__wrapper')}>
        <div className={cn('schedule__months')}>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <span>{error}</span>
          ) : (
            <ScheduleMonths data={data} />
          )}
        </div>
        <div
          data-aos="wave-animation"
          data-aos-once={true}
          data-aos-anchor-placement="center-bottom"
        >
          <Line className={cn('schedule__wrapper--line')} />
        </div>
      </div>
    </div>
  );
}

SectionSchedule.propTypes = {
  academy: PropTypes.string,
};
