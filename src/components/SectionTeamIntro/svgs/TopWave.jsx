import React from 'react';
import PropTypes from 'prop-types';

export function TopWave({ className }) {
  return (
    <svg
      className={className}
      width="1440"
      height="242"
      viewBox="0 0 1440 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4772_500)">
        <rect width="1440" height="242" fill="white" />
        <path
          opacity="0.1"
          d="M1468.49 765C1468.49 765 1386.92 676.126 1307.52 630.684C1243.35 584.243 1128.6 553.283 1128.6 553.283C1128.6 553.283 1036.69 526.817 942.607 518.827C954.672 517.667 930.696 520.19 942.607 518.827C843.629 507.841 746.282 507.341 613.042 518.827C472.188 534.307 439.014 539.8 439.014 539.8C439.598 539.923 306.861 565.268 306.861 565.268C306.861 565.268 180.147 596.134 161.112 599.723C100.202 611.209 -105.053 678.554 -105.053 678.554C-105.053 678.554 -92.5841 632.403 -92.5841 595.107C-92.5841 517.638 -126 451.718 -126 374.249C-126 334.369 -101.561 291.118 -101.561 291.118C-30.3187 249.171 66.4844 216.713 66.4844 216.713L172.533 183.256C195.374 177.994 238.881 166.278 259.547 164.28L293.809 158.787C321.544 155.292 324.807 154.792 351.456 152.295C354.084 151.225 399.545 149.87 402.576 148.8C425.418 147.302 448.259 146.802 467.837 146.802C492.31 147.801 498.292 147.801 551.588 150.797C601.621 155.791 668.513 163.282 668.513 163.282C720.178 170.273 749.545 173.269 789.789 179.261C893.118 192.745 892.031 191.247 938.257 194.742L953.484 195.241L968.168 195.741H998.623C1006.78 195.741 1030.71 195.241 1052.46 193.244L1081.29 190.248L1104.67 186.752C1104.67 186.752 1135.67 182.258 1169.92 172.271C1169.92 172.271 1258.03 148.301 1337.43 97.3665C1390.19 64.4087 1489.44 -15 1489.44 -15C1447.04 59.4523 1448.54 137.902 1448.54 197.364C1448.54 265.857 1505.69 506.666 1502.9 582.617C1497.71 724.191 1473.97 739.017 1468.49 765Z"
          fill="#4D8AF0"
        />
        <path
          d="M-60.2348 240.836C690.805 -95.4483 900.183 408.728 1421.72 0.989724M-60.2348 641.079C292.716 509.664 1072.04 333.776 1421.72 689.049"
          stroke="#0048C1"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_4772_500">
          <rect width="1440" height="242" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

TopWave.propTypes = {
  className: PropTypes.string,
};