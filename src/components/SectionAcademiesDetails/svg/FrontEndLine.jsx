import React from 'react';
import PropTypes from 'prop-types';

export default function FrontEndLine(props) {
  return (
    <svg
      viewBox="0 0 659 877"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M507.701 1.85925C342.349 77.6773 198.068 19.5862 81.5839 154.031C-34.9001 288.476 -46.7401 652.308 192.408 817.89C403.335 963.932 542.898 783.421 658 789"
        stroke="#3D3691"
        strokeWidth="2"
      />
    </svg>
  );
}

FrontEndLine.propTypes = {
  className: PropTypes.string,
};
