import { SvgProps } from './types';

const ComputerDesktop = ({ size = '24px', className }: SvgProps) => {
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
        d='M10.5 20.125V21.3003C10.5 22.2285 10.1313 23.1188 9.47487 23.7751L8.75 24.5H19.25L18.5251 23.7751C17.8688 23.1187 17.5 22.2285 17.5 21.3003V20.125M24.5 6.125V17.5C24.5 18.9497 23.3247 20.125 21.875 20.125H6.125C4.67525 20.125 3.5 18.9497 3.5 17.5V6.125M24.5 6.125C24.5 4.67525 23.3247 3.5 21.875 3.5H6.125C4.67525 3.5 3.5 4.67525 3.5 6.125M24.5 6.125V14C24.5 15.4497 23.3247 16.625 21.875 16.625H6.125C4.67525 16.625 3.5 15.4497 3.5 14V6.125'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ComputerDesktop;
