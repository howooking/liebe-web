'use client';

import Image from 'next/image';
import Container from '@/components/container';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  {
    label: '인사말',
    href: '/#salute',
  },
  {
    label: '진료과목',
    href: '/#subject',
  },
  {
    label: '수의사소개',
    href: '/#staff',
  },
  {
    label: '시설안내',
    href: '/#facility',
  },
  {
    label: '오시는길',
    href: '/#map',
  },
];

export default function Navbar() {
  const [navbarStyle, setNavbarStyle] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarStyle('#222');
      } else {
        setNavbarStyle('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed w-full h-[70px] shadow z-50 flex items-center"
      style={{
        backgroundColor: navbarStyle,
        transition: 'background-color 500ms ease',
      }}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* 로고 */}
          <a className="flex items-center gap-2" href="/#carousel">
            <Image src="/logo.png" alt="logo" width={60} height={60} />
            <div className="flex flex-col text-xl font-bold items-center">
              <h2 className="text-white tracking-wide">
                <span className="bg-accent px-1 rounded-sm">24시</span> LIEBE
                AMC
              </h2>
              <h1 className="text-white">리베동물메디컬센터</h1>
            </div>
          </a>

          {/* 메뉴 */}
          <nav>
            <ul className="text-white flex gap-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-accent hover:font-bold transition duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 시간 & 전화 */}
          <div className="text-white font-bold flex flex-col items-center bg-red-500 px-1 rounded-sm">
            <h3>연중무휴 24시 진료</h3>
            <h3>02 6953 7502 </h3>
          </div>
        </div>
      </Container>
    </header>
  );
}
