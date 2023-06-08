import MissionCard from '@/components/missionCard';
import SubNavbar from '@/components/subNavbar';
import MISSIONS from '@/constants/missions';

export default function Mission() {
  return (
    <section className="h-section overflow-hidden" id="mission">
      <SubNavbar title="LIEBE MISSION" />
      <div className="flex gap-5 w-full h-full">
        {MISSIONS.map((mission) => (
          <MissionCard key={mission.id} {...mission} />
        ))}
      </div>
    </section>
  );
}
