import React from 'react';
import PropTypes from 'prop-types';

export default function Plus(props) {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.5">
        <path
          d="M11.738 0.0900879H8.479V18.5571H11.738V0.0900879Z"
          fill="currentColor"
        />
        <path
          d="M19.3418 10.9531V7.69409L0.874798 7.69409V10.9531L19.3418 10.9531Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

Plus.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
