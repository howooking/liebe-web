'use client';

import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const SLIDES = [0, 1, 2, 3];

export default function HeroSwiper() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={4000}
      autoFocus
      useKeyboardArrows
      transitionTime={1000}
      showArrows={false}
      showIndicators
      showStatus={false}
      emulateTouch
      stopOnHover={false}
      swipeScrollTolerance={10}
      // centerMode
      // centerSlidePercentage={50}

      showThumbs={false}
      // thumbWidth={100}
      // renderThumbs={() =>
      //   SLIDES.map((slide) => (
      //     // eslint-disable-next-line @next/next/no-img-element
      //     <img
      //       src={`/photos/slides/slide_${slide}.jpg`}
      //       key={slide}
      //       alt={`slide_${slide}`}
      //     />
      //   ))
      // }
    >
      {SLIDES.map((slide) => (
        <Image
          key={slide}
          alt={`slide_${slide}`}
          src={`/heroes/hero_${slide}.jpg`}
          width={3200}
          height={1800}
        />
      ))}
    </Carousel>
  );
}
