'use client';

import Container from '@/components/container';
import MissionCard from '@/components/missionCard';
import SectionTitle from '@/components/sectionTitle';

const MISSIONS = [
  {
    img: 'mission_0',
    engTitle: 'Expertise',
    korTitle: '전문적인 기술',
    subTitle:
      '리베는 석박사 출신 등 국내 최고 수준의 전문 의료진이 상주합니다. 또한 대학병원급 장비를 활용하여 정밀하고 정확한 진단을 시행합니다.',
  },
  {
    img: 'mission_1',
    engTitle: 'Standard',
    korTitle: '높은 수준의 기준',
    subTitle:
      '리베 의료진은 반려동물의 완전 치유를 위하여 매우 높은 의료 기준을 적용합니다. 장비와 도구, 각종 약품 등 사소한 것 하나도 타협하지 않겠습니다.',
  },
  {
    img: 'mission_2',
    engTitle: 'Concentration',
    korTitle: '집중, 몰입의 개념',
    subTitle:
      '내과, 외과, 영상의학과, 마취과 등 각 분야 전문 의료진이 실시간 협진하는 대학병원 수준의 진료시스템으로 운영됩니다. 각 의료진이 자신의 영역에 집중, 몰입할 수 있는 환경을 구축하고 있습니다.',
  },
];

export default function Mission() {
  return (
    <section
      className="h-section flex justify-center items-center"
      id="mission"
    >
      <Container>
        <div>
          <SectionTitle
            title="LIEBE MISSION"
            subTitle="최고의 의료서비스를 통해 반려동물과 보호자의 행복한 삶을 만들어갑니다."
          />
        </div>
        <div className="flex gap-5 w-full pt-10">
          {MISSIONS.map((mission, index) => (
            <MissionCard key={mission.img} {...mission} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
