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
  title,
}: SubjectPage) {
  return (
    <div
      className={`${
        pageInView === id ? 'opacity-100 w-[70vw]' : 'hidden opacity-0'
      }`}
    >
      <FacilitySwiper images={images} type={engTitle} />
    </div>
  );
}
