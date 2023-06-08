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
  members,
  pageInView,
  engTitle,
}: SubjectPage) {
  const infinite = engTitle === 'vet' || engTitle === 'nurse' ? true : false;
  return (
    <div className={`${pageInView === id ? '' : 'hidden'} pt-5`}>
      <StaffSwiper members={members} type={engTitle} infinite={infinite} />
    </div>
  );
}
