import React from 'react';
import PropTypes from 'prop-types';

UploadIcon.propTypes = {
  className: PropTypes.string,
};

export default function UploadIcon(props) {
  return (
    <svg
      className={props.className}
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12.406V17.366C22.0671 18.663 21.0745 19.7708 19.778 19.846H4.22203C2.92553 19.7708 1.93297 18.663 2.00003 17.366V12.406"
        stroke="#5C5C5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7.346L12 1.5L7 7.346"
        stroke="#5C5C5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1.84595V14.4059"
        stroke="#5C5C5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
