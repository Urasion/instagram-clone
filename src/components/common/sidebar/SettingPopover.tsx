import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Menu } from '@/type';
import { LucideLogOut, LucideMoon, LucideSettings } from 'lucide-react';
import React from 'react';
type Props = {
  isDrawerOpen: boolean;
};
const menus: Menu[] = [
  {
    label: '로그아웃',
    icon: <LucideLogOut className="!size-6" />,
  },
  {
    label: '다크모드',
    icon: <LucideMoon className="!size-6" />,
  },
];
export default function SettingPopover({ isDrawerOpen }: Props) {
  return (
    <Popover>
      <PopoverTrigger className="w-full flex items-center rounded-lg py-2 px-3 space-x-6 text-white hover:bg-gray-700/60 hover:text-white text-base duration-300 group">
        <LucideSettings className="group-hover:animate-spin" />
        {isDrawerOpen || <span className={'hidden xl:block'}>설정</span>}
      </PopoverTrigger>
      <PopoverContent className="w-[220px] rounded-lg  hover:[#000000] hover:text-white bg-[#262626] border-0 text-white text-base ml-4">
        <ul className="flex flex-col space-y-4">
          {menus.map(({ label, icon }) => (
            <li
              key={`key-${label}`}
              className="w-full flex p-2 space-x-6 rounded-lg hover:bg-[#363636]"
            >
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
