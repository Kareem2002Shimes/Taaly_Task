import { SvgProps } from './types';

const ViewArrow = ({ size = '24px', className }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M15.25 1.25L19 5M19 5L15.25 8.75M19 5H1'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ViewArrow;
