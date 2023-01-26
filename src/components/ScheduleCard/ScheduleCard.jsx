import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CalendarCard from '@components/CalendarCard';
import {
  Portrait,
  Clock,
  LocationPin,
  ArrowDown,
} from '@components/SectionSchedule/svg';
import styles from './ScheduleCard.module.scss';

const cn = classNames.bind(styles);

export default function ScheduleCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <details className={cn('details')} onToggle={handleOpen}>
      <summary
        className={cn('details__summary', {
          'details__summary--expanded': isOpen,
        })}
      >
        <div className={cn('details__heading-wrapper')}>
          <h4 className={cn('details__heading')}>{event.title}</h4>
          <ArrowDown className={cn({ rotation: isOpen })} />
        </div>
        {isOpen && event.lecturer && (
          <div className={cn('details__lecturer')}>
            <Portrait />
            <div>{event.lecturer}</div>
          </div>
        )}
        {isOpen && event.time && (
          <div className={cn('details__time')}>
            <div className={cn('time-wrapper')}>
              <Clock />
              <div className={cn('time-wrapper__hours')}>{event.time}</div>
            </div>
            <div>{event.duration} hours</div>
          </div>
        )}
      </summary>
      <div className={cn('details__info')}>
        {event.locations.map(({ date, city }, index) => {
          return (
            <CalendarCard key={index} from={date} to={date}>
              <div className={cn('calendar-card')}>
                <LocationPin className={cn('calendar-card__pin')} />
                {city}
              </div>
            </CalendarCard>
          );
        })}
      </div>
    </details>
  );
}

ScheduleCard.propTypes = {
  event: PropTypes.shape({
    duration: PropTypes.number,
    lecturer: PropTypes.string,
    locations: PropTypes.array,
    time: PropTypes.string,
    title: PropTypes.string,
  }),
};
