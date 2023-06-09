import SectionTitle from './sectionTitle';
import Container from './container';
import SUBJECTS from '@/constants/subjects';
import STAFFS from '@/constants/staffs';
import FACILITY from '@/constants/facility';

interface SubjectNavbarProps {
  pageInView?: number;
  handlePageInView?: (subjectId: number) => void;
  type?: 'subject' | 'staff' | 'facility';
  title: string;
}

const submenuType = (type?: 'subject' | 'staff' | 'facility') => {
  if (!type) {
    return [];
  }
  if (type === 'subject') {
    return SUBJECTS;
  }
  if (type === 'staff') {
    return STAFFS;
  }
  if (type === 'facility') {
    return FACILITY;
  }
};

export default function SubNavbar({
  pageInView,
  handlePageInView,
  type,
  title,
}: SubjectNavbarProps) {
  const submenu = submenuType(type);
  return (
    <nav className="shadow-sm py-3">
      <Container>
        <div className="flex justify-between">
          <SectionTitle title={title} />
          {type ? (
            <ul className="flex gap-9 items-center">
              {submenu?.map((el) => (
                <li
                  key={el.title}
                  onClick={() => handlePageInView!(el.id)}
                  className={`cursor-pointer transition font-bold duration-500 ${
                    pageInView === el.id ? '' : 'opacity-40'
                  }`}
                >
                  {el.title}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </nav>
  );
}
