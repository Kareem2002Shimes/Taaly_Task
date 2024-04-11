import SidebarContainer from '@/_components/admin/Sidebar';
import { Pages, Routes } from '@/_constants/enums';

export async function generateStaticParams() {
  const links = [
    Pages.MATCHING,
    Pages.REPORTING,
    Pages.ORGANIZATIONS,
    Pages.PROJECTS,
    Pages.LEARNING_TRACKS,
    Pages.SETTINGS,
    Pages.HELP,
  ];

  return links.map((link) => ({
    slug: link,
  }));
}
const ProtectedPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <SidebarContainer />
      {params.slug} page
    </>
  );
};

export default ProtectedPage;
