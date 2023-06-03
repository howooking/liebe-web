import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface FacilitySwiperProps {
  images: { name: string; id: number }[];
  type: string;
}

export default function FacilitySwiper({ images, type }: FacilitySwiperProps) {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      autoFocus
      useKeyboardArrows
      transitionTime={1000}
      // showArrows
      showIndicators={false}
      showStatus={false}
      emulateTouch
      swipeScrollTolerance={10}
      centerMode
      centerSlidePercentage={75}
      showThumbs
      thumbWidth={70}
      renderThumbs={() =>
        images.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/facilities/${type}_${image.id}.jpg`}
            key={image.id}
            alt={`${type}_${image.id}`}
          />
        ))
      }
    >
      {images.map((image) => (
        <div key={image.id}>
          <Image
            alt={`${type}_${image.id}`}
            src={`/facilities/${type}_${image.id}.jpg`}
            width={613}
            height={460}
            priority
            className="px-10"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-5">
            <h3 className="bg-gray-500 text-white px-2 rounded-sm">
              {image.name}
            </h3>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
