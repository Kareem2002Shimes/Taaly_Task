import React from 'react';
import { SvgProps } from './types';

const Phone = ({ size = '24px', className }: SvgProps) => {
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
        d='M3 9C3 20.0457 11.9543 29 23 29H26C27.6569 29 29 27.6569 29 26V24.1712C29 23.4829 28.5316 22.8829 27.8638 22.716L21.9662 21.2416C21.3807 21.0952 20.7645 21.314 20.4024 21.7968L19.1088 23.5216C18.7334 24.0222 18.084 24.2435 17.4965 24.0283C13.0872 22.4131 9.58687 18.9128 7.97168 14.5035C7.75645 13.916 7.97781 13.2666 8.4784 12.8912L10.2032 11.5976C10.686 11.2355 10.9048 10.6193 10.7584 10.0338L9.28405 4.1362C9.11711 3.46845 8.51714 3 7.82884 3H6C4.34315 3 3 4.34315 3 6V9Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Phone;
