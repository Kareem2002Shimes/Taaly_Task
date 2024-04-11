import { SvgProps } from './types';

const QuestionMarkCircle = ({ size = '24px', className }: SvgProps) => {
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
        d='M11.5254 8.77199C12.8922 7.57601 15.1083 7.57601 16.4751 8.77199C17.842 9.96797 17.842 11.907 16.4751 13.103C16.2372 13.3112 15.9736 13.4831 15.6932 13.6188C14.8232 14.0398 14.0003 14.7835 14.0003 15.75V16.625M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14ZM14 20.125H14.0088V20.1338H14V20.125Z'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default QuestionMarkCircle;
