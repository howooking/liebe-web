import Carousel from '@/sections/a_carousel';
import Salute from '@/sections/b_salute';
import Subjects from '@/sections/c_subjects';
import Staff from '@/sections/d_staff';
import Facility from '@/sections/e_facility';
import Map from '@/sections/f_map';

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
