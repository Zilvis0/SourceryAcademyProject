import React from 'react';
import PropTypes from 'prop-types';

export default function ArrowDown({ cnHover, ...props }) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C31.3652 1 37.4697 3.52856 41.9706 8.02944C46.4714 12.5303 49 18.6348 49 25Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cnHover}
        />
        <path
          d="M15.896 25.3101L24.996 34.4101L34.096 25.3101"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 15.896V34.104"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

ArrowDown.propTypes = {
  className: PropTypes.string,
  cnHover: PropTypes.string,
};
