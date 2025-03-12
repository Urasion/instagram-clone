import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';

type Props = {
  image?: string | null;
  className?: string;
};
export default function UserAvatar({ image, className }: Props) {
  return (
    <Avatar className={className}>
      <AvatarImage src={cn(image || 'https://github.com/shadcn.png')} />
    </Avatar>
  );
}
