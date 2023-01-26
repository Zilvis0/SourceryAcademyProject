import React from 'react';
import PropTypes from 'prop-types';

export default function CloseIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 6L18 18M18 6L6 18" stroke="#000000" strokeWidth="2" />
    </svg>
  );
}

CloseIcon.propTypes = {
  className: PropTypes.string,
};
