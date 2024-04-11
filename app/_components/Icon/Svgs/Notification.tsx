import { SvgProps } from './types';

const Notification = ({ size = '24px', className }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 27 29'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.6661 21.9108C20.429 21.5831 23.0933 20.9335 25.6203 20.0007C23.5249 17.6748 22.2496 14.5957 22.2496 11.2187V10.1967C22.2498 10.1728 22.2499 10.1489 22.2499 10.125C22.2499 5.29251 18.3324 1.375 13.4999 1.375C8.66739 1.375 4.74988 5.29251 4.74988 10.125L4.74959 11.2187C4.74959 14.5957 3.47423 17.6748 1.37891 20.0007C3.90609 20.9336 6.57051 21.5832 9.33362 21.9109M17.6661 21.9108C16.2999 22.0729 14.9095 22.1562 13.4996 22.1562C12.0899 22.1562 10.6997 22.0729 9.33362 21.9109M17.6661 21.9108C17.8017 22.3329 17.8749 22.7829 17.8749 23.25C17.8749 25.6662 15.9161 27.625 13.4999 27.625C11.0836 27.625 9.12488 25.6662 9.12488 23.25C9.12488 22.7829 9.19807 22.3329 9.33362 21.9109'
        stroke='currentColor'
        strokeWidth='2.1875'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Notification;