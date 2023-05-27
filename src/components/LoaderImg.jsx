import React from 'react';

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    version="1"
    viewBox="0 0 128 128"
  >
    <g>
      <circle cx="16" cy="64" r="16" fill="#373b69" />
      <circle
        cx="16"
        cy="64"
        r="16"
        fill="#7a7c9b"
        transform="rotate(45 64 64)"
      />
      <circle
        cx="16"
        cy="64"
        r="16"
        fill="#abadc0"
        transform="rotate(90 64 64)"
      />
      <circle
        cx="16"
        cy="64"
        r="16"
        fill="#d7d8e1"
        transform="rotate(135 64 64)"
      />
      <circle
        cx="16"
        cy="64"
        r="16"
        fill="#e7e8ed"
        transform="rotate(180 64 64)"
      />
      <circle
        cx="16"
        cy="64"
        r="16"
        fill="#e7e8ed"
        transform="rotate(225 64 64)"
      />
      <circle
        cx="16"
        cy="64"
        r="16"
        fill="#e7e8ed"
        transform="rotate(270 64 64)"
      />
      <circle
        cx="16"
        cy="64"
        r="16"
        fill="#e7e8ed"
        transform="rotate(315 64 64)"
      />
      <animateTransform
        attributeName="transform"
        calcMode="discrete"
        dur="1040ms"
        repeatCount="indefinite"
        type="rotate"
        values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
      />
    </g>
  </svg>
);

export default Icon;
