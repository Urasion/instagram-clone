import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { Menu } from '@/type';
import { LucideHome, LucideSearch } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { useSession } from 'next-auth/react';
import UserAvatar from '../UserAvatar';

type Props = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};
export default function SidebarList({ isDrawerOpen, setIsDrawerOpen }: Props) {
  const { data } = useSession();
  const user = data?.user;
  const menus: Menu[] = useMemo(
    () => [
      {
        label: '홈',
        value: '/home',
        icon: <LucideHome className="!size-6" />,
      },
      {
        label: '검색',
        icon: <LucideSearch className="!size-6" />,
        isDrawer: true,
      },
      {
        label: '프로필',
        icon: <UserAvatar image={user?.image} className="size-6" />,
        value: `/${user?.id}`,
      },
    ],
    [user]
  );
  return (
    <ul className="w-full h-full flex flex-col items-center space-y-2 bg-rose-300">
      {menus.map((menu) => (
        <SidebarItem
          key={`menu-${menu.value}`}
          menu={menu}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      ))}
    </ul>
  );
}
