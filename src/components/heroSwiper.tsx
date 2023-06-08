'use client';

import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import HERO_SLIDES from '@/constants/heroSlides';

export default function HeroSwiper() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      autoFocus
      useKeyboardArrows
      transitionTime={1000}
      showArrows={false}
      showIndicators
      showStatus={false}
      emulateTouch={false}
      stopOnHover={false}
      showThumbs={false}
    >
      {HERO_SLIDES.map((slide) => (
        <Image
          key={slide}
          alt={`slide_${slide}`}
          src={`/heroes/hero_${slide}.jpg`}
          width={3200}
          height={1800}
          priority
        />
      ))}
    </Carousel>
  );
}
