'use client';

import Image from 'next/image';
import Container from '@/components/container';
import { useEffect, useState } from 'react';
import NAV_ITEMS from '@/constants/navbarItem';

export default function Navbar() {
  const [navbarStyle, setNavbarStyle] = useState('transparent');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full h-[70px] select-none shadow z-50 flex items-center hover:bg-accent transition-colors duration-300 ${
        isScrolled ? 'bg-accent' : 'transparent'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* 로고 */}
          <a className="flex items-center gap-2" href="/#hero">
            <Image src="/logo.png" alt="logo" width={60} height={60} priority />
            <div className="flex flex-col font-bold items-center">
              <h2 className="text-white tracking-wide">24시 LIEBE AMC</h2>
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
                    className="hover:opacity-30 transition duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 시간 & 전화 */}
          {/* <div className="text-white flex flex-col items-center bg-red-500 px-1 rounded-sm">
            <h3>연중무휴 24시 진료</h3>
            <h3>02 6953 7502 </h3>
          </div> */}
        </div>
      </Container>
    </header>
  );
}
