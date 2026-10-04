import React, { useId } from 'react';

// Vector parts stay crisp at avatar size and can move independently.
export default function LanzMascot({ waving = false, thinking = false, className = '' }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={`lanz-mascot ${waving ? 'is-waving' : ''} ${thinking ? 'is-thinking' : ''} ${className}`}
      viewBox="0 0 160 160" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-shell`} x1="42" y1="40" x2="117" y2="132" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E4D5FF" /><stop offset=".45" stopColor="#AA78F5" /><stop offset="1" stopColor="#6635BA" />
        </linearGradient>
        <linearGradient id={`${id}-face`} x1="48" y1="55" x2="110" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C2344" /><stop offset="1" stopColor="#151323" />
        </linearGradient>
        <linearGradient id={`${id}-ear`} x1="23" y1="71" x2="41" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BDA0FF" /><stop offset="1" stopColor="#7740C8" />
        </linearGradient>
      </defs>
      <ellipse className="lanz-shadow" cx="80" cy="144" rx="30" ry="5" fill="#9E6DF5" opacity=".2" />
      <g className="lanz-float">
        <g className="lanz-antenna">
          <path d="M80 43V29" stroke="#B992F9" strokeWidth="5" strokeLinecap="round" />
          <circle cx="80" cy="24" r="6" fill="#B6F6EF" />
          <circle cx="78" cy="22" r="2" fill="white" />
        </g>
        <g className="lanz-arm-left">
          <path d="M48 104C36 103 26 112 28 119C31 126 44 119 51 114" fill={`url(#${id}-shell)`} stroke="#CBACFF" strokeWidth="1.5" />
        </g>
        <g className="lanz-arm-right">
          <path d="M113 103C124 103 130 94 135 99C143 107 126 122 113 115" fill={`url(#${id}-shell)`} stroke="#CBACFF" strokeWidth="1.5" />
        </g>
        <path d="M55 98H105L111 117C113 129 98 136 80 136C62 136 47 129 49 117L55 98Z" fill={`url(#${id}-shell)`} />
        <path d="M75 115L80 109L85 115L80 122L75 115Z" fill="#D5FFF7" />
        <rect x="26" y="65" width="15" height="27" rx="7.5" fill={`url(#${id}-ear)`} />
        <rect x="119" y="65" width="15" height="27" rx="7.5" fill={`url(#${id}-ear)`} />
        <rect x="34" y="40" width="92" height="67" rx="28" fill={`url(#${id}-shell)`} stroke="#D0B4FF" strokeWidth="1.5" />
        <path d="M47 55C52 48 59 47 70 47" stroke="white" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
        <rect x="44" y="53" width="72" height="43" rx="18" fill={`url(#${id}-face)`} stroke="#C0A2F4" strokeWidth="1.5" />
        <g className="lanz-eyes">
          <rect x="59" y="66" width="9" height="14" rx="4.5" fill="#B0F6EB" />
          <rect x="92" y="66" width="9" height="14" rx="4.5" fill="#B0F6EB" />
          <circle cx="62" cy="69" r="1.5" fill="white" /><circle cx="95" cy="69" r="1.5" fill="white" />
        </g>
        <path d="M75 82Q80 87 85 82" stroke="#CBB1FF" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="55" cy="83" rx="4" ry="2" fill="#C98AEF" opacity=".5" />
        <ellipse cx="105" cy="83" rx="4" ry="2" fill="#C98AEF" opacity=".5" />
      </g>
      <path className="lanz-spark lanz-spark-one" d="M130 34L132 40L138 42L132 44L130 50L128 44L122 42L128 40Z" fill="#C6A0FF" />
      <path className="lanz-spark lanz-spark-two" d="M23 46L24.5 50.5L29 52L24.5 53.5L23 58L21.5 53.5L17 52L21.5 50.5Z" fill="#A5E8ED" />
    </svg>
  );
}
