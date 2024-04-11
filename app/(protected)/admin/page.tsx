import Learners from '@/_components/admin/Learners';
import SidebarContainer from '@/_components/admin/Sidebar';
import TotalInfo from '@/_components/admin/TotalInfo';

const Admin = () => {
  return (
    <>
      <SidebarContainer />
      <main className='flex-1 bg-base-color rounded-[16px] p-10'>
        <TotalInfo />
        <Learners />
      </main>
    </>
  );
};

export default Admin;
