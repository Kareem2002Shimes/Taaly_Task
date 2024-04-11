'use client';
import Image from 'next/image';
import Link from 'next/link';
import Search from './Search';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  return (
    <header>
      <div className='bg-base-color rounded-[16px] px-10 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-4'>
          <div className='w-[70px] h-[55px] element-center rounded-[11.52px] bg-primary '>
            <Image
              src='/assets/images/logo.svg'
              alt='Taaly Brand'
              width={40}
              height={20}
            />
          </div>
          <strong className='font-[600] text-primary text-lg'>Taaly</strong>
        </Link>
        <Search />
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Header;
