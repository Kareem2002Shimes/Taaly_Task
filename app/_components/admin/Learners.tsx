'use client';
import { useState } from 'react';
import LearnersSearch from './LearnersSearch';
import LearnersTable from './LearnersTable';

enum MenuItems {
  LEARNERS = 'Learners',
  LANGUAGE_BUDDIES = 'Language Buddies',
}
const Learners = () => {
  const [activeMenu, setActiveMenu] = useState(MenuItems.LEARNERS);
  const Menu = [MenuItems.LEARNERS, MenuItems.LANGUAGE_BUDDIES];
  return (
    <div className='bg-white mt-4 mb-6 rounded-[16px] py-6 px-10'>
      <nav className='mb-4'>
        <ul className='flex items-center gap-10'>
          {Menu.map((item, i) => (
            <li
              key={i}
              className={`${
                i === 0
                  ? 'relative after:absolute after:content-["|"] after:text-[#B1B0B8] after:-right-5'
                  : ''
              }`}
            >
              <button
                type='button'
                onClick={() => setActiveMenu(item)}
                className={`${
                  activeMenu === item
                    ? 'text-primary border-b border-primary'
                    : 'text-[#B1B0B8]'
                } font-[500] text-base`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <LearnersSearch />
      {activeMenu === MenuItems.LEARNERS ? (
        <LearnersTable />
      ) : (
        <p>{MenuItems.LANGUAGE_BUDDIES}</p>
      )}
    </div>
  );
};

export default Learners;
