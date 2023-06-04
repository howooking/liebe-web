'use client';

import Container from '@/components/container';
import MissionCard from '@/components/missionCard';
import SectionTitle from '@/components/sectionTitle';
import MISSIONS from '@/constants/missions';

export default function Mission() {
  return (
    <section
      className="h-section flex justify-center items-center"
      id="mission"
    >
      <Container>
        <div>
          <SectionTitle title="LIEBE MISSION" />
        </div>
        <div className="flex gap-5 w-full pt-10">
          {MISSIONS.map((mission, index) => (
            <MissionCard key={mission.id} {...mission} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
