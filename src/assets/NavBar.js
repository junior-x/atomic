import * as React from "react";

const SvgNavBar = (props) => (
  <svg
    width={1512}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#navBar_svg__a)">
      <path fill="#61BB46" d="M0-595h227V6H0z" />
      <path fill="#FDB827" d="M227-595h228V6H227z" />
      <path fill="#F5821F" d="M455-595h227V6H455z" />
      <path fill="#E03A3E" d="M682-595h228V6H682z" />
      <path fill="#963D97" d="M910-595h227V6H910z" />
      <path fill="#009DDC" d="M1137-595h228V6h-228z" />
      <path fill="#fff" d="M1364.63-595h160.373V6H1364.63z" />
    </g>
    <defs>
      <filter
        id="navBar_svg__a"
        x={-21}
        y={-608}
        width={1559}
        height={635}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-4} dy={4} />
        <feGaussianBlur stdDeviation={8.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_33_34" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_33_34"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgNavBar;
