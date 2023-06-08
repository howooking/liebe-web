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
    <div className={`${pageInView === id ? '' : 'hidden'} pt-5`}>
      <FacilitySwiper images={images} type={engTitle} />
    </div>
  );
}
