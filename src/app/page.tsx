import Carousel from '@/sections/carousel';
import Salute from '@/sections/salute';
import Subjects from '@/sections/subjects';
import Staff from '@/sections/staff';
import Facility from '@/sections/facility';
import Map from '@/sections/map';

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
