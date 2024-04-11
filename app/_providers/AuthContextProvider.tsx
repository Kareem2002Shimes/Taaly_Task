'use client';
import { auth, db } from '@/_firebase/config';
import { ILogin } from '@/_validations/auth';
import {
  createUserWithEmailAndPassword,
  getIdToken,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { doc, getDoc } from 'firebase/firestore';
import { UserType } from '@/_types/app';
import { useRouter } from 'next/navigation';
import { Pages, Role, Routes } from '@/_constants/enums';

const AuthContext = createContext<any>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const router = useRouter();

  const login = async (data: ILogin) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return res;
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const register = async (data: ILogin) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return res;
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const logout = () => {
    signOut(auth);
    Cookies.remove('access_token');
    Cookies.remove('role');
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        // Take user data form db not from auth provider
        // This happened because Firebase disconnects auth provider from firestore (db)
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        const dbUser = docSnap.data() as UserType;

        Cookies.set('role', dbUser.role);
        setUser(dbUser);
      }
    });
    return () => unSubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, logout, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
