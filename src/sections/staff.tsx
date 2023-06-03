'use client';

import StaffPage from '@/components/staffPage';
import SubNavbar from '@/components/subNavbar';
import STAFFS from '@/constants/staffs';
import { useState } from 'react';

export default function Staff() {
  const [pageInView, setPageInView] = useState(0);
  const handlePageInView = (subjectId: number) => {
    setPageInView(subjectId);
  };
  return (
    <section className="h-section overflow-hidden" id="staff">
      <SubNavbar
        pageInView={pageInView}
        handlePageInView={handlePageInView}
        type="staff"
        title="직원소개"
      />
      {STAFFS.map((staff) => (
        <StaffPage
          key={staff.id}
          id={staff.id}
          members={staff.members}
          pageInView={pageInView}
          title={staff.title}
          engTitle={staff.engTitle}
        />
      ))}
    </section>
  );
}
