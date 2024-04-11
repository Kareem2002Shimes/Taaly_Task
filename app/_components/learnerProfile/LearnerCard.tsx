'use client';
import { Routes } from '@/_constants/enums';
import { db } from '@/_firebase/config';
import { UserType } from '@/_types/app';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Card from '../profile/Card';

const LearnerCard = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      if (userId) {
        setLoading(true);
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);
        const dbUser = docSnap.data() as UserType;
        setLoading(false);
        setUser(dbUser);
        if (!dbUser) {
          router.replace(`/${Routes.ADMIN}`);
        }
      }
    };
    getCurrentUser();
  }, [userId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && user && <Card user={user} />}
    </>
  );
};

export default LearnerCard;
