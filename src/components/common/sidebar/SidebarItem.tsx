import { Menu } from '@/type';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  menu: Menu;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};
export default function SidebarItem({
  menu,
  isDrawerOpen,
  setIsDrawerOpen,
}: Props) {
  const { label, value, icon, isDrawer } = menu;
  const navigate = useRouter();
  return (
    <li
      className="w-full flex items-center rounded-lg py-2 px-3 space-x-6 text-white hover:bg-gray-700/60 hover:text-white text-base duration-300"
      key={value}
      onClick={() => {
        if (isDrawer) {
          setIsDrawerOpen((prev) => !prev);
        } else {
          navigate.push(value as string);
        }
      }}
    >
      {icon}
      {isDrawerOpen || <span className={'hidden xl:block'}>{label}</span>}
    </li>
  );
}
