import React from 'react';
import PropTypes from 'prop-types';

export default function SmCircle(props) {
  return (
    <svg
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.84497 6.75395C5.60013 6.75395 7.02301 5.33112 7.02301 3.57596C7.02301 1.8208 5.60013 0.397949 3.84497 0.397949C2.08981 0.397949 0.666992 1.8208 0.666992 3.57596C0.666992 5.33112 2.08981 6.75395 3.84497 6.75395Z"
        fill="currentColor"
      />
    </svg>
  );
}

SmCircle.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
