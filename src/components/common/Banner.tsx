import { cn } from '@/lib/utils';
import { LucideInstagram } from 'lucide-react';
import { useRouter } from 'next/navigation';
type Props = {
  isDrawerOpen: boolean;
};
export default function Banner({ isDrawerOpen }: Props) {
  const navigate = useRouter();
  return (
    <div
      className={cn(
        'w-full h-14 relative rounded-lg text-white active:text-gray-700/60 hover:bg-gray-700/60 xl:hover:bg-transparent',
        isDrawerOpen && 'hover:xl:bg-gray-700/60'
      )}
      onClick={() => {
        navigate.push('home');
      }}
    >
      {
        <span
          className={cn(
            'absolute left-6 top-0.5 text-2xl duration-300 italic',
            isDrawerOpen ? 'opacity-0' : 'xl:opacity-100 opacity-0'
          )}
        >
          𝒥𝒲𝒮𝓉𝒶𝑔𝓇𝒶𝓂
        </span>
      }
      <LucideInstagram
        className={cn(
          'absolute left-3 top-[9px] transition-transform duration-300',
          isDrawerOpen
            ? '!size-6'
            : 'translate-x-0 translate-y-0 xl:translate-x-1 xl:translate-y-1 !size-6 scale-100 xl:scale-0  '
        )}
      />
    </div>
  );
}
