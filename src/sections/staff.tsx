import Container from '@/components/container';
import SectionTitle from '@/components/sectionTitle';
import StaffSwiper from '@/components/staffSwiper';

export default function Staff() {
  return (
    <section className="h-section flex justify-center items-center" id="staff">
      <Container>
        <SectionTitle
          title="수의사소개"
          subTitle="최고의 의료진들이 함께합니다"
        />
        <div className="w-full mx-auto">
          <StaffSwiper />
        </div>
      </Container>
    </section>
  );
}
