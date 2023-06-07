'use client';

import Container from '@/components/container';
import FacilityPage from '@/components/facilityPage';
import FacilitySwiper from '@/components/facilitySwiper';
import SectionTitle from '@/components/sectionTitle';
import SubNavbar from '@/components/subNavbar';
import FACILITY from '@/constants/facility';
import { useState } from 'react';

export default function Facility() {
  const [pageInView, setPageInView] = useState(0);
  const handlePageInView = (subjectId: number) => {
    setPageInView(subjectId);
  };
  return (
    <section className="h-section overflow-hidden" id="facility">
      <SubNavbar
        pageInView={pageInView}
        handlePageInView={handlePageInView}
        type="facility"
        title="시설안내"
      />
      <div>
        {FACILITY.map((facility) => (
          <FacilityPage
            key={facility.id}
            id={facility.id}
            images={facility.images}
            pageInView={pageInView}
            title={facility.title}
            engTitle={facility.engTitle}
          />
        ))}
      </div>
    </section>
  );
}
