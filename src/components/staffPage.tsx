import Image from 'next/image';
import StaffSwiper from './staffSwiper';

export interface Member {
  id: number;
  name: string;
  title: string;
  subject: string[];
  descriptions: string[];
}

interface SubjectPage {
  id: number;
  title: string;
  engTitle: string;
  members: Member[];
  pageInView: number;
}

export default function StaffPage({
  id,
  title,
  members,
  pageInView,
  engTitle,
}: SubjectPage) {
  const infinite = engTitle === 'vet' || engTitle === 'nurse' ? true : false;
  return (
    <div
      className={`${pageInView === id ? 'opacity-100' : 'hidden opacity-0'}`}
    >
      <StaffSwiper members={members} type={engTitle} infinite={infinite} />
    </div>
  );
}
