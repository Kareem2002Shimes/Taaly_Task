'use client';
import Card from '@/_components/profile/Card';
import { Pages, Role, Routes } from '@/_constants/enums';
import { useAuth } from '@/_providers/AuthContextProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace(`/${Pages.LOGIN}`);
  };
  return (
    <main>
      <div className='container element-center gap-6 py-6'>
        {user ? (
          <>
            <div className='flex items-center gap-4'>
              <button
                type='button'
                onClick={handleLogout}
                className='text-red-500 bg-red-100 h-10 px-4 rounded-[10px] element-center'
              >
                Sign Out
              </button>
              {user.role === Role.ADMIN && (
                <Link
                  href={`/${Routes.ADMIN}`}
                  className='text-green-500 bg-green-100 px-4 h-10 rounded-[10px] element-center'
                >
                  Go to Admin Dashboard
                </Link>
              )}
            </div>
            <Card user={user} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Profile;
