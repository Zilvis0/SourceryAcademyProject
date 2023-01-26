import React from 'react';
import styles from './CalendarCard.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { getDate, getMonthName } from '@shared/functions';

const cn = classNames.bind(styles);

export default function CalendarCard({ children, from, to }) {
  const isEqual = from === to;

  return (
    <div className={cn('calendar')}>
      <div
        className={cn('calendar__date-wrapper', {
          'calendar__date-wrapper--equal': !isEqual,
        })}
      >
        <p className={cn('calendar__date')}>
          {getMonthName(from)}
          <span className={cn('calendar__day')}>{getDate(from)}</span>
        </p>

        {!isEqual && (
          <p className={cn('calendar__date')}>
            {getMonthName(to)}
            <span className={cn('calendar__day')}>{getDate(to)}</span>
          </p>
        )}
      </div>

      <div className={cn('calendar__event')}>{children}</div>
    </div>
  );
}

CalendarCard.propTypes = {
  children: PropTypes.node.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
