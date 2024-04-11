
import { SvgProps } from './types';

const BookOpen = ({ size = '24px', className }: SvgProps) => {
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
        d='M14 7.04863C12.1424 5.38599 9.68924 4.375 7 4.375C5.77278 4.375 4.59473 4.58554 3.5 4.97247V21.5975C4.59473 21.2105 5.77278 21 7 21C9.68924 21 12.1424 22.011 14 23.6736M14 7.04863C15.8576 5.38599 18.3108 4.375 21 4.375C22.2272 4.375 23.4053 4.58554 24.5 4.97247V21.5975C23.4053 21.2105 22.2272 21 21 21C18.3108 21 15.8576 22.011 14 23.6736M14 7.04863V23.6736'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default BookOpen;
