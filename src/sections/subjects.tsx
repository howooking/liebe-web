'use client';

import SubjectNavbar from '@/components/subjectNavbar';
import SubjectPage from '@/components/subjectPage';
import { SUBJECTS } from '@/constants/subjects';
import { useState } from 'react';

export default function Subjects() {
  const [pageInView, setPageInView] = useState(0);
  const handlePageInView = (subjectId: number) => {
    setPageInView(subjectId);
  };
  return (
    <section className="h-section overflow-hidden" id="subject">
      <SubjectNavbar
        pageInView={pageInView}
        handlePageInView={handlePageInView}
      />
      {SUBJECTS.map((subject) => (
        <SubjectPage {...subject} key={subject.id} pageInView={pageInView} />
      ))}
    </section>
  );
}
