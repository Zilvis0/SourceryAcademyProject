import React from 'react';
import PropTypes from 'prop-types';

export default function TestersLine(props) {
  return (
    <svg
      viewBox="0 0 695 656"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.748047 1.86047C176.085 89.9075 323.972 14.5665 493.619 70.4905C663.266 126.414 730.121 263.281 675 386.245C619.879 509.209 340.322 508.532 156 654.345"
        stroke="#3D3691"
        strokeWidth="2"
      />
    </svg>
  );
}

TestersLine.propTypes = {
  className: PropTypes.string,
};
