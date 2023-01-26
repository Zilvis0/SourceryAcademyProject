import React from 'react';
import PropTypes from 'prop-types';

export default function Wave(props) {
  return (
    <svg
      width="210"
      height="825"
      viewBox="0 0 210 825"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M208.155 0.401855C169.311 295.094 -67.521 390.472 21.0622 631.98C63.2184 746.912 126.795 768.196 194.997 824.001"
        stroke="currentColor"
        strokeWidth="2"
        className="svg-theme-primary"
      />
    </svg>
  );
}

Wave.propTypes = {
  className: PropTypes.string,
};
