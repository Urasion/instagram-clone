'use client';
import { useState } from 'react';
import Banner from '../Banner';
import { cn } from '@/lib/utils';
import SidebarList from './SidebarList';
import SettingPopover from './SettingPopover';
export default function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  return (
    <div
      className={cn(
        'w-[72px] xl:w-[220px] flex flex-col  items-center px-3 py-10  space-y-10 bg-black',
        isDrawerOpen && 'xl:w-[72px]'
      )}
      id="sidebar"
    >
      <Banner isDrawerOpen={isDrawerOpen} />
      <SidebarList
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <SettingPopover isDrawerOpen={isDrawerOpen} />
    </div>
  );
}
