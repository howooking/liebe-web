import FacilitySwiper from './facilitySwiper';

interface SubjectPage {
  id: number;
  title: string;
  engTitle: string;
  images: {
    id: number;
    name: string;
  }[];
  pageInView: number;
}

export default function FacilityPage({
  engTitle,
  id,
  images,
  pageInView,
}: SubjectPage) {
  return (
    <div
      className={`${
        pageInView === id ? 'opacity-100' : 'opacity-0 h-0'
      } transition-all duration-1000`}
    >
      <FacilitySwiper images={images} type={engTitle} />
    </div>
  );
}
