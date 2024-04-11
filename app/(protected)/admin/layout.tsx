import Header from '@/_components/admin/header/Header';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className='container flex flex-col gap-6 py-6'>
        <Header />
        <div className='flex gap-4'>{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
