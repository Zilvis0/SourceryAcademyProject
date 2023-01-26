import React from 'react';

export default function Clock(props) {
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
        d="M7 2.00049C4.24299 2.00049 2 4.24348 2 7.00049C2 9.7575 4.24299 12.0005 7 12.0005C9.75701 12.0005 12 9.7575 12 7.00049C12 4.24348 9.75701 2.00049 7 2.00049ZM7 0.000488281C10.866 0.000488281 14 3.1345 14 7.00049C14 10.8665 10.866 14.0005 7 14.0005C3.13401 14.0005 0 10.8665 0 7.00049C0 3.1345 3.13401 0.000488281 7 0.000488281Z"
        fill="currentColor"
      />
      <path
        d="M6.50488 4.19849V7.19849L8.50488 8.19849"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
