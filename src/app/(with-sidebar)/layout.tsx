import Sidebar from '@/components/common/sidebar/Sidebar';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex bg-black">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
