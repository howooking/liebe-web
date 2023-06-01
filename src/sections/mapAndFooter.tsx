import Container from '@/components/container';
import Footer from '@/components/footer';
import SectionTitle from '@/components/sectionTitle';

export default function MapAndFooter() {
  return (
    <section className="h-section flex flex-col" id="map">
      <div className="flex-1 flex justify-center items-center">
        <Container>
          <SectionTitle
            title="오시는길"
            subTitle="지하철 9호선 삼전역 3번 출구 "
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.1769002770557!2d127.08568751530976!3d37.503745679809654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c2be4848ecd%3A0x3b4a3d3edda3a56e!2z66as67Kg64-Z66y866mU65SU7Lus7IS87YSw!5e0!3m2!1sko!2skr!4v1685228889052!5m2!1sko!2skr"
            width="100%"
            height="500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Container>
      </div>
      <Footer />
    </section>
  );
}
