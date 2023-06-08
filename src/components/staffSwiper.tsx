'use client';

import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { Member } from './staffPage';

interface StaffSwiperProps {
  members: Member[];
  type: string;
  infinite: boolean;
}

export default function StaffSwiper({
  members,
  type,
  infinite,
}: StaffSwiperProps) {
  return (
    <Carousel
      infiniteLoop={infinite}
      autoFocus
      useKeyboardArrows
      showArrows
      showIndicators={false}
      showStatus={false}
      transitionTime={500}
      emulateTouch
      swipeScrollTolerance={100}
      centerMode
      centerSlidePercentage={40}
    >
      {members.map((member) => (
        <div key={member.id}>
          <Image
            alt={`${type}_${member.id}`}
            src={`/staffs/${type}_${member.id}.jpg`}
            width={460}
            height={613}
            priority
            className="px-20"
          />
          <div className="absolute inset-0 group hover:bg-black/60 mx-20 transition duration-300 text-white flex flex-col justify-end items-center pb-8">
            <div className="group-hover:opacity-100 transition duration-300 p-3 space-y-2 opacity-0">
              <h3 className="font-bold text-lg">
                {member.title} {member.name}
              </h3>
              <p className="text-sm">{member.subject}</p>
              <ul>
                {member.descriptions.map((desc) => (
                  <li key={desc}>⦁ {desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
