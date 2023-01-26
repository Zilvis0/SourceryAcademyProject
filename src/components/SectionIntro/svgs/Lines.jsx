import React from 'react';
import PropTypes from 'prop-types';

function TextLine({ className }) {
  return (
    <svg
      className={className}
      width="404"
      height="192"
      viewBox="0 0 404 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M402.5 1C402.5 1 322.57 190.5 138 190.5C40.5 190.5 1.5 104.5 1.5 104.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function VideoLine({ className }) {
  return (
    <svg
      className={className}
      width="652"
      height="595"
      viewBox="0 0 652 595"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.7702 1C11.8675 84.8323 -39.3107 353.877 59.9997 512.5C179.267 703.005 499.304 482.773 650.5 592.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

TextLine.propTypes = {
  className: PropTypes.string,
};
VideoLine.propTypes = {
  className: PropTypes.string,
};

export { TextLine, VideoLine };
