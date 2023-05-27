import Salute from '@/sections/salute';
import Subjects from '@/sections/subjects';
import Staff from '@/sections/staff';
import Facility from '@/sections/facility';
import MapAndFooter from '@/sections/mapAndFooter';
import Hero from '@/sections/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Salute />
      <Subjects />
      <Staff />
      <Facility />
      <MapAndFooter />
    </main>
  );
}
