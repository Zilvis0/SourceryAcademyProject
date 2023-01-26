import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './StarsWrapper.module';
import StarUniq from '../StarUniq';

const cn = classNames.bind(styles);

export default function StarsWrapper({ starCoordinates, ...rest }) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('stars-wrapper')}
      {...rest}
    >
      {starCoordinates.map((coordinates, index) => (
        <StarUniq key={index} {...coordinates} />
      ))}
    </svg>
  );
}

StarsWrapper.defaultProps = {
  width: '100%',
};

StarsWrapper.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  starCoordinates: PropTypes.array.isRequired,
};
