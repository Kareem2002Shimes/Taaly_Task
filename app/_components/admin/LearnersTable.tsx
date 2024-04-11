import { Pages, Role, Routes } from '@/_constants/enums';
import { db } from '@/_firebase/config';
import { UserType } from '@/_types/app';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import Icon from '../Icon';
import Link from 'next/link';
import Image from 'next/image';

const LearnersTable = () => {
  const users = [
    {
      name: 'John Doe',
      level: 'Intermediate',
      program: 'Computer Science',
      organization: 'ABC Inc.',
      rating: 4.5,
      hoursSpent: 30,
    },
    {
      name: 'Jane Smith',
      level: 'Beginner',
      program: 'Data Science',
      organization: 'XYZ Corp.',
      rating: 4.2,
      hoursSpent: 25,
    },
    {
      name: 'Alice Johnson',
      level: 'Advanced',
      program: 'Engineering',
      organization: '123 Company',
      rating: 4.8,
      hoursSpent: 35,
    },
  ];
  const tableThead = [
    '',
    'Name',
    'Level',
    'Program',
    'Organization',
    'Rating',
    'Hours Spent',
  ];

  const [learners, setLearners] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const docRef = collection(db, 'users');
      const querySnapshot = await getDocs(docRef);
      const fetchedUsers: UserType[] = [];
      querySnapshot.forEach((doc) => {
        const user = doc.data() as UserType;
        fetchedUsers.push(user);
      });
      const filteredUsers = fetchedUsers.filter(
        (user) => user.role !== Role.ADMIN
      );
      setLoading(false);
      setLearners(filteredUsers);
    };
    getUsers();
  }, []);

  const HoursProgressbar = ({ hoursSpent }: { hoursSpent: number }) => {
    const maxHrs = 10;

    return (
      <div className='w-[60px] h-[60px] relative'>
        <CircularProgressbar
          value={hoursSpent}
          maxValue={maxHrs}
          strokeWidth={4}
          circleRatio={1}
          styles={{
            trail: {
              transformOrigin: 'center center',
              stroke: '#B1B0B8',
              strokeWidth: '2px',
            },
            path: {
              transformOrigin: 'center center',
              stroke: '#04001A',
              strokeWidth: '4px',
              strokeLinecap: 'round', // Make the line cap butt to remove rounded edges
            },
            text: {
              fill: '#04001A',
              fontWeight: 'bold',
              textAnchor: 'middle',
              fontSize: '16px',
            },
          }}
        />
        <div className='element-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <strong className='font-[700] text-base leading-4'>
            {hoursSpent}
          </strong>
          <span className='text-sm font-normal leading-3'>/{maxHrs}</span>
        </div>
      </div>
    );
  };
  return (
    <table className='table-auto w-full text-left mt-2'>
      <thead>
        <tr>
          {tableThead.map((item, i) => (
            <th key={i} className='py-4 text-[#B1B0B8] text-sm font-normal'>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      {loading && <p>Loading...</p>}
      {!loading && learners.length > 0 && (
        <tbody>
          {learners.map((user, index) => (
            <tr
              key={index}
              className='border-b border-[#E6E6E8] text-lg pb-4 last-of-type:pb-0 capitalize text-heading font-[500]'
            >
              <td>
                {user.photoURL && (
                  <Image
                    src={user.photoURL}
                    alt='Learner Image'
                    width={50}
                    height={50}
                    className='rounded-full'
                  />
                )}
              </td>

              <td className='py-4'>{user.displayName}</td>
              <td className='py-4'>{user.level}</td>
              <td className='py-4'>{user.program}</td>
              <td className='py-4'>{user.organization}</td>
              <td className='py-4'>{user.rating}/10</td>
              <td className='py-4'>
                <HoursProgressbar hoursSpent={user.hoursSpent as number} />
              </td>
              <Link
                href={`/${Routes.ADMIN}/${Pages.LEARNER_PROFILE}/${user.id}`}
                className='pt-8 text-primary flex items-center gap-2'
              >
                View <Icon name='view-arrow' />
              </Link>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default LearnersTable;
