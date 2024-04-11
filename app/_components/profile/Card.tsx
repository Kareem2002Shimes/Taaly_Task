'use client';
import Image from 'next/image';
import BackBtn from '../BackBtn';
import Icon, { SvgIconType } from '../Icon';
import { useAuth } from '@/_providers/AuthContextProvider';
import { ClipLoader } from 'react-spinners';
import { UserType } from '@/_types/app';
import { Routes } from '@/_constants/enums';

type userInfo = {
  icon: SvgIconType;
  label: string;
  value: string;
}[];
const Card = ({ user }: { user: UserType }) => {
  const userInfo: userInfo = [
    { icon: 'email', label: 'E-mail', value: user.email },
    {
      icon: 'phone',
      label: 'Phone',
      value: user.phoneNumber,
    },
    {
      icon: 'map',
      label: 'Location',
      value: '6391 Elgin St. Celina, Delaware 10299',
    },
    {
      icon: 'academic-cap',
      label: 'Highest Education',
      value: 'BA Graphic Design',
    },
    {
      icon: 'briefcase',
      label: 'Latest work experience',
      value: 'Marketing Coordinator',
    },
  ];
  return (
    <section className='py-6 px-4 bg-base-color w-[408px] rounded-[16px] relative'>
      <div className='absolute left-4'>
        <BackBtn url={`/${Routes.ADMIN}`} />
      </div>
      <div className='flex flex-col items-center px-4'>
        <h3 className='font-[500] text-2xl text-heading mb-6'>
          {user.displayName}
        </h3>
        <Image
          src={user.photoURL || '/assets/images/profile.png'}
          alt='profile img'
          width={100}
          height={100}
          className='border-[3px] border-[#1E00B9] rounded-full mb-6'
        />

        <span className='text-lg text-heading font-[500] mb-2'>Bio</span>
        <q className='text-black font-[500] text-base'>
          “I’m a marketing coordinator who recently moved to netherlands and i’m
          struggling with the dutch language”
        </q>
        <ul className='w-full mt-6 flex flex-col gap-6'>
          {userInfo.map((item, i) => (
            <li key={i}>
              <div className='flex items-center gap-4 mb-4'>
                <Icon name={item.icon} className='text-heading' />
                <label className='text-heading font-[500] text-xl'>
                  {item.label}
                </label>
              </div>
              <p className='text-[#8C8A96] font-[500] text-base'>
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Card;
