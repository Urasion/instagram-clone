import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-96 h-full grow flex flex-col justify-center items-center mx-auto gap-4 ">
      {children}
    </div>
  );
}
