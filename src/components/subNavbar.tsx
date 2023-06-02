import { SUBJECTS } from '@/constants/subjects';
import SectionTitle from './sectionTitle';
import Container from './container';

interface SubjectNavbarProps {
  pageInView: number;
  handlePageInView: (subjectId: number) => void;
}

export default function SubNavbar({
  pageInView,
  handlePageInView,
}: SubjectNavbarProps) {
  return (
    <nav className="shadow-md py-5">
      <Container>
        <div className="flex justify-between">
          <SectionTitle title="진료과목" subTitle="" />
          <ul className="flex gap-9 items-center">
            {SUBJECTS.map((subject) => (
              <li
                key={subject.title}
                onClick={() => handlePageInView(subject.id)}
                className={`p-2 cursor-pointer transition font-bold duration-500 ${
                  pageInView === subject.id ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {subject.title}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
