import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-96 h-full flex flex-col items-center mx-auto gap-4">
      {children}
    </div>
  );
}
