import AuthImage from '@/_components/auth/AuthImage';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='bg-base-color element-center min-h-screen'>
      <div className='container py-10'>
        <div className='flex bg-white rounded-[14px]'>
          <AuthImage />
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
