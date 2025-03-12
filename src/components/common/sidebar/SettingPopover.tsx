import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { PopoverContent } from '@radix-ui/react-popover';
import { LucideSettings } from 'lucide-react';
import React from 'react';
type Props = {
  isDrawerOpen: boolean;
};
export default function SettingPopover({ isDrawerOpen }: Props) {
  return (
    <Popover>
      <PopoverTrigger className="w-full flex items-center rounded-lg py-2 px-3 space-x-6 text-white hover:bg-gray-700/60 hover:text-white text-base duration-300 group">
        <LucideSettings className="group-hover:animate-spin" />
        {isDrawerOpen || <span className={'hidden xl:block'}>설정</span>}
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
}
