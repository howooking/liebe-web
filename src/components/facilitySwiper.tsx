'use client';

import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const FACILITIES = [
  {
    id: 0,
    label: '인포',
  },
  {
    id: 1,
    label: '고양이 친화병원',
  },
  {
    id: 2,
    label: '약 조제실',
  },
  {
    id: 3,
    label: '처치실',
  },
  {
    id: 4,
    label: '처치실',
  },
  {
    id: 5,
    label: '격리입원실',
  },
  {
    id: 6,
    label: '2층 인포',
  },
  {
    id: 7,
    label: '영상 분석실',
  },
  {
    id: 8,
    label: '탈의실',
  },
  {
    id: 9,
    label: '워터 트레드밀',
  },
  {
    id: 10,
    label: 'CT',
  },
  {
    id: 11,
    label: '수술준비실',
  },
  {
    id: 12,
    label: '수술실',
  },
  {
    id: 13,
    label: '수술실',
  },
  {
    id: 14,
    label: '수술실',
  },
  {
    id: 15,
    label: '수술실',
  },
  {
    id: 16,
    label: '마취기',
  },
  {
    id: 17,
    label: 'C-arm',
  },
];

export default function FacilitySwiper() {
  return (
    <Carousel
      // autoPlay
      infiniteLoop
      // interval={7000}
      autoFocus
      useKeyboardArrows
      transitionTime={1000}
      showArrows
      showIndicators
      showStatus={false}
      emulateTouch
      // stopOnHover={false}
      swipeScrollTolerance={10}
      centerMode
      centerSlidePercentage={90}
      showThumbs
      thumbWidth={100}
      renderThumbs={() =>
        FACILITIES.map((facility) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/facilities/facility_${facility.id}.jpg`}
            key={facility.id}
            alt={`facility_${facility.id}`}
          />
        ))
      }
    >
      {FACILITIES.map((facility) => (
        <div key={facility.id}>
          <Image
            alt={`facility_${facility.id}`}
            src={`/facilities/facility_${facility.id}.jpg`}
            width={3200}
            height={1800}
            className="px-5"
            priority
          />
          <p className="legend text-red-300">{facility.label}</p>
        </div>
      ))}
    </Carousel>
  );
}
