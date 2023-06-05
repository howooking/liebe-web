import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface SocialButtonProps {
  label: string;
  href: string;
  Icon: IconType;
  size: number;
}

export default function SocialButton({
  label,
  href,
  Icon,
  size,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${label} bg-slate-50 ring-1 ring-slate-500 p-2 rounded-full w-10 h-10 flex justify-center items-center opacity-30 hover:opacity-100 transition-all`}
    >
      <Icon size={size} />
    </a>
  );
}
