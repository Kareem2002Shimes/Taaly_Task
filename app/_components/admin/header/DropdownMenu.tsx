import Icon from '@/_components/Icon';
import { Pages, Routes } from '@/_constants/enums';
import { useAuth } from '@/_providers/AuthContextProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DropdownMenu = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.replace(`/${Pages.LOGIN}`);
  };
  return (
    <div className='flex items-center gap-6'>
      <div className='relative after:absolute after:content-[""] after:w-[6px] after:h-[6px] after:rounded-full after:bg-red-500 after:top-[2px] after:right-[3px]'>
        <Icon name='notification' className='text-[#8C8A96]' />
      </div>
      {user && (
        <div className='dropdown flex items-center gap-6'>
          <p className='font-[700] text-[#04001A]'>
            Hi, {user.displayName || user.email}
          </p>
          <button type='button' tabIndex={0} className='mb-2'>
            <Image
              alt='User settings'
              src={user.photoURL || '/assets/images/profile.png'}
              width={48}
              height={48}
              className='rounded-full'
            />
          </button>
          <ul
            tabIndex={0}
            className='dropdown-content top-full right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link href={`/${Routes.PROFILE}`}>Setting</Link>
            </li>
            <li>
              <button
                type='button'
                onClick={handleLogout}
                className='text-red-500 hover:bg-red-100'
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
