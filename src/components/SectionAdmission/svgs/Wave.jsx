import React from 'react';
import PropTypes from 'prop-types';

export default function Wave(props) {
  return (
    <svg
      width="471"
      height="784"
      viewBox="0 0 471 784"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M461.998 0.499023C310.878 324.178 115.011 254.517 35.0303 393.056C-44.9507 531.595 27.1773 649.456 136.155 678.656C245.133 707.856 377.498 628.499 469.498 782.499"
        className="svg-theme-primary"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

Wave.propTypes = {
  className: PropTypes.string,
};
