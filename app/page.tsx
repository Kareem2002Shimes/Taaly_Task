import Link from 'next/link';
import { Pages, Routes } from './_constants/enums';
import { cookies } from 'next/headers';

export default function Home() {
  const isAuth = cookies().get('access_token')?.value;

  const links = isAuth
    ? [
        { href: `/${Routes.PROFILE}`, title: 'Profile' },
        { href: `/${Routes.ADMIN}`, title: 'Admin' },
      ]
    : [
        { href: `/${Pages.LOGIN}`, title: 'Login' },
        { href: `/${Pages.SIGNUP}`, title: 'Signup' },
      ];

  return (
    <main className='element-center flex-col h-screen'>
      <h1 className='text-6xl'>
        Hello and Welcome to{' '}
        <strong className='text-primary font-bold text-7xl'>Taaly</strong>
      </h1>
      <ul
        style={{
          gridTemplateColumns: `repeat(${links.length}, minmax(0, 1fr))`,
        }}
        className={`grid gap-4 mt-6`}
      >
        {links.map((link, i) => (
          <li key={i} className='text-3xl hover:text-primary'>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
