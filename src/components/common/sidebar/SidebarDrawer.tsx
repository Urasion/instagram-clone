import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  isDrawerOpen: boolean;
};
export default function SidebarDrawer({ isDrawerOpen, children }: Props) {
  return (
    <div
      className={cn(
        'bg-violet-300 duration-300',
        isDrawerOpen
          ? 'absolute w-[220px] -right-[220px]'
          : 'absolute w-[220px] right-0'
      )}
    >
      {children}
    </div>
  );
}
