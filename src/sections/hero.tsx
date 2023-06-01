import HeroSwiper from '@/components/heroSwiper';
import TimeInfo from '@/components/timeInfo';

export default function Hero() {
  return (
    <section className="h-screen overflow-hidden relative" id="hero">
      <HeroSwiper />
      <TimeInfo />
    </section>
  );
}
