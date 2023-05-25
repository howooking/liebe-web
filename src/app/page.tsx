import Carousel from '@/sections/a-carousel';
import Salute from '@/sections/b-salute';
import Subjects from '@/sections/c-subjects';
import Staff from '@/sections/d-staff';
import Facility from '@/sections/e-facility';
import Map from '@/sections/f-map';

export default function Home() {
  return (
    <main>
      <Carousel />
      <Salute />
      <Subjects />
      <Staff />
      <Facility />
      <Map />
    </main>
  );
}
