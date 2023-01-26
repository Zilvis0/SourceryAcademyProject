import React from 'react';
import PropTypes from 'prop-types';

export default function ArrowDown(props) {
  return (
    <svg
      width="21"
      height="13"
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.719 9.00553L18.4971 1.06352C18.769 0.781949 19.1436 0.622925 19.5351 0.622925C19.9265 0.622925 20.3011 0.781949 20.573 1.06352C21.1431 1.65716 21.1431 2.59488 20.573 3.18852L11.76 12.1885C11.2095 12.7538 10.3076 12.7733 9.73305 12.2325L0.858049 3.19353C0.285924 2.60072 0.285924 1.66133 0.858049 1.06853C1.12997 0.78695 1.5046 0.627924 1.89604 0.627924C2.28748 0.627924 2.66213 0.78695 2.93405 1.06853L10.719 9.00553Z"
        fill="white"
      />
    </svg>
  );
}

ArrowDown.propTypes = {
  className: PropTypes.string,
};
