import SOCIALS from '@/constants/socials';
import SocialButton from './ui/socialButton';

export default function Floatings() {
  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-5">
      {SOCIALS.map((social) => (
        <SocialButton
          key={social.label}
          label={social.label}
          href={social.href}
          Icon={social.icon}
          size={social.size}
        />
      ))}
    </div>
  );
}
