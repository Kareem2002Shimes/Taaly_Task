import LearnerCard from '@/_components/learnerProfile/LearnerCard';

export async function generateStaticParams() {
  // Fetching users from db in server side
  const usersIds = [
    'EFdEnE1NcvY4OXmuxOK5CodcsNT2',
    'GsvwlG0s42VC85fOELJ6yzR37Lr2',
    'O1EbnZNOoGhulxgcIzh9zLFjShO2',
  ];

  return usersIds.map((id) => ({
    id,
  }));
}
const LearnerProfile = ({ params }: { params: { id: string } }) => {
  const userId = params.id;

  return <LearnerCard userId={userId} />;
};

export default LearnerProfile;
