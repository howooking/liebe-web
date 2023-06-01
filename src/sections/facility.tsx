'use client';

import Container from '@/components/container';
import FacilitySwiper from '@/components/facilitySwiper';
import SectionTitle from '@/components/sectionTitle';

export default function Facility() {
  return (
    <section
      className="h-section flex justify-center items-center"
      id="facility"
    >
      <Container>
        <SectionTitle title="시설안내" />
        <div className="w-2/3 mx-auto">
          <FacilitySwiper />
        </div>
      </Container>
    </section>
  );
}
