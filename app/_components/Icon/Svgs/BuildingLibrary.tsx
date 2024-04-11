import { SvgProps } from './types';

const BuildingLibrary = ({ size = '24px', className }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 28 28'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 24.5V14.875M18.375 24.5V14.875M9.625 24.5V14.875M3.5 10.5L14 3.5L24.5 10.5M22.75 24.5V12.0546C19.899 11.6072 16.9766 11.375 14 11.375C11.0234 11.375 8.101 11.6072 5.25 12.0546V24.5M3.5 24.5H24.5M14 7.875H14.0088V7.88375H14V7.875Z'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default BuildingLibrary;
