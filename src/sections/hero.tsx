import Swiper from '@/components/swiper';
import TimeInfo from '@/components/timeInfo';

export default function Hero() {
  return (
    <section className="h-screen overflow-hidden relative" id="hero">
      <Swiper />
      <TimeInfo />
    </section>
  );
}
