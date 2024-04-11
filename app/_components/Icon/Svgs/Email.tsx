import React from 'react';
import { SvgProps } from './types';

const Email = ({ size = '24px', className }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16ZM22 16C22 18.2091 23.3431 20 25 20C26.6569 20 28 18.2092 28 16C28 12.9289 26.8284 9.85787 24.4853 7.51472C19.799 2.82843 12.201 2.82843 7.51472 7.51472C2.82843 12.201 2.82843 19.799 7.51472 24.4853C12.201 29.1716 19.799 29.1716 24.4853 24.4853M22 16V11'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Email;
