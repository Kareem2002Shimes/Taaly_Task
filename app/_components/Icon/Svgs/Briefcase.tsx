import React from 'react';
import { SvgProps } from './types';

const Briefcase = ({ size = '24px', className }: SvgProps) => {
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
        d='M27 18.8666V24.5333C27 25.9926 25.9508 27.2479 24.5042 27.4399C21.7219 27.8093 18.8832 28 16 28C13.1168 28 10.2781 27.8093 7.49579 27.4399C6.0492 27.2479 5 25.9926 5 24.5333V18.8665M27 18.8666C27.6292 18.3302 28 17.5185 28 16.6518V11.6076C28 10.1663 26.9761 8.92109 25.5507 8.70781C24.0502 8.4833 22.5327 8.31087 21 8.19243M27 18.8666C26.7419 19.0866 26.4402 19.2603 26.1028 19.3725C22.9271 20.4283 19.5303 21 16 21C12.4697 21 9.07293 20.4283 5.89718 19.3725C5.55979 19.2603 5.25814 19.0866 5 18.8665M5 18.8665C4.37077 18.3302 4 17.5185 4 16.6518V11.6076C4 10.1663 5.02387 8.92109 6.44926 8.70781C7.94977 8.4833 9.46732 8.31087 11 8.19243M21 8.19243V7C21 5.34315 19.6569 4 18 4H14C12.3431 4 11 5.34315 11 7V8.19243M21 8.19243C19.3501 8.06493 17.6826 8 16 8C14.3174 8 12.6499 8.06493 11 8.19243M16 17H16.01V17.01H16V17Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Briefcase;
