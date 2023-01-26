import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ScheduleCard from '@components/ScheduleCard';
import styles from './ScheduleMonths.module.scss';

const cn = classNames.bind(styles);

export default function ScheduleMonths({ data }) {
  const [schedule, setSchedule] = useState({});

  const convertTime = (time) => {
    const hours = parseInt(time.split(':')[0]);
    const minutes = time.split(':')[1];

    const amOrPm = hours >= 12 ? 'pm' : 'am';
    const formatedHours = `${hours % 12 || 12}`.padStart(2, '0');
    return `${formatedHours}:${minutes} ${amOrPm}`;
  };

  const formatSchedule = (events) => {
    const result = {};

    events.forEach((event) => {
      const month = `${new Date(event.date).getFullYear()}-${
        new Date(event.date).getMonth() + 1
      }`;

      if (!(month in result)) {
        result[month] = [];
      }

      result[month].push(event);
    });

    Object.entries(result).forEach(([key, value]) => {
      result[key] = value.reduce((acc, curr) => {
        const existingTitle = acc.find((el) => el.title === curr.title);

        if (existingTitle) {
          existingTitle.locations.push({
            city: curr.location,
            date: curr.date,
          });
        } else {
          acc.push({
            lecturer: curr.lecturer,
            duration: curr.duration / 60,
            title: curr.title,
            time: curr.time ? convertTime(curr.time) : null,
            locations: [{ city: curr.location, date: curr.date }],
          });
        }
        return acc;
      }, []);
    });

    return result;
  };

  const formatMonthName = (date) => {
    return new Date(date).toLocaleString('default', { month: 'long' });
  };

  useEffect(() => {
    setSchedule(formatSchedule(data));
  }, [data]);

  return Object.entries(schedule).map(([month, lessons], i) => {
    const isEven = (i + 1) % 2 === 0;
    return (
      <div key={i} className={cn('month')}>
        <h3 className={cn('month__heading', { 'month--even': isEven })}>
          {isEven && <div className={cn('month--dash')}>/</div>}
          {formatMonthName(month)}
        </h3>
        <div className={cn('month__layout')}>
          {lessons.map((lesson, y) => {
            return <ScheduleCard key={y} event={lesson} />;
          })}
        </div>
      </div>
    );
  });
}

ScheduleMonths.propTypes = {
  data: PropTypes.array,
};
