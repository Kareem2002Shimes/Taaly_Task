'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default ToasterProvider;
