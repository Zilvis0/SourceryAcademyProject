import React from 'react';
import PropTypes from 'prop-types';

export default function TeamHeroIllustration(props) {
  return (
    <svg
      width="592"
      height="150"
      viewBox="0 0 592 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.2021 1C-29.4062 75.4594 55.8104 164.609 162.854 146.444C284.751 125.758 325.881 59.5747 440.953 40.7117C534.504 25.3764 575.238 83.4017 584.058 105.74L590.5 95.8116L584.058 107.229L570.678 101.768"
        stroke="#0048C1"
        strokeWidth="2"
      />
    </svg>
  );
}

TeamHeroIllustration.propTypes = {
  className: PropTypes.string,
};
