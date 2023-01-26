import React from 'react';
import PropTypes from 'prop-types';

export default function DevelopersLine(props) {
  return (
    <svg
      width="667"
      height="649"
      viewBox="0 0 667 649"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M538.639 1C378.262 134.761 70.0375 149.289 20.4209 267.018C-29.1958 384.748 12.402 529.334 217.384 589.146C390.791 639.744 484.011 559.087 666.457 647.76"
        stroke="#3D3691"
        strokeWidth="2"
      />
    </svg>
  );
}

DevelopersLine.propTypes = {
  className: PropTypes.string,
};
