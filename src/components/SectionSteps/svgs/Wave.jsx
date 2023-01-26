import React from 'react';
import PropTypes from 'prop-types';

export default function Wave(props) {
  return (
    <svg
      width="75"
      height="632"
      viewBox="0 0 75 632"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M48.1876 1C-17.3267 263.5 -17.3267 461.5 73.5 631.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

Wave.propTypes = {
  className: PropTypes.string,
};
