'use client';

import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const STAFFS = [
  {
    id: 0,
    name: '최갑철',
    title: '대표원장',
    subject: '외과수술센터, 재활치료센터',
  },
  {
    id: 1,
    name: '한만길',
    title: '원장',
    subject: '내과, 고양이',
  },
  {
    id: 2,
    name: '옹성민',
    title: '원장',
    subject: '외과, 영상진단',
  },
  {
    id: 3,
    name: '이창호',
    title: '부원장',
    subject: '외과',
  },
  {
    id: 4,
    name: '김민수',
    title: '부원장',
    subject: '내과',
  },
  {
    id: 5,
    name: '남윤주',
    title: '야간응급과장',
    subject: '야간',
  },
];

export default function StaffSwiper() {
  return (
    <Carousel
      autoFocus
      useKeyboardArrows
      showArrows
      showIndicators={false}
      showStatus={false}
      transitionTime={500}
      emulateTouch
      swipeScrollTolerance={100}
      showThumbs={false}
      centerMode
      centerSlidePercentage={40}
    >
      {STAFFS.map((staff) => (
        <div className="" key={staff.id}>
          <Image
            key={staff.id}
            alt={`staff_${staff.id}`}
            src={`/staffs/staff_${staff.id}.jpg`}
            width={310}
            height={350}
            priority
            className="px-6 rounded-3xl"
          />
          <Link href={`/staffs/${staff.id}`}>
            <div className="absolute inset-0 hover:bg-black/10 mx-6 group flex flex-col justify-end transition duration-300">
              <div className="group-hover:bg-accent text-white opacity-0 group-hover:opacity-100 transition duration-300 p-3 space-y-2">
                <h3 className="font-bold">
                  {staff.title} {staff.name}
                </h3>
                <p className="text-sm">{staff.subject}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
