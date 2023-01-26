import React from 'react';
import PropTypes from 'prop-types';

export default function Circle(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.5"
        d="M6.88226 13.036C10.4821 13.036 13.4002 10.1178 13.4002 6.518C13.4002 2.91821 10.4821 0 6.88226 0C3.28247 0 0.364258 2.91821 0.364258 6.518C0.364258 10.1178 3.28247 13.036 6.88226 13.036Z"
        fill="currentColor"
      />
    </svg>
  );
}

Circle.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
