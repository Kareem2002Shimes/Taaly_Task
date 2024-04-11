'use client';

import { useRouter } from 'next/navigation';
import Icon from './Icon';

const BackBtn = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <button type='button' onClick={() => router.push(url)}>
      <Icon name='back-arrow' className='text-heading' />
    </button>
  );
};

export default BackBtn;
