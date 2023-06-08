'use client';

import Image from 'next/image';
import Container from '@/components/container';
import { useEffect, useState } from 'react';
import NAV_ITEMS from '@/constants/navbarItems';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // 첫 접속시 중간으로 스크롤이 이동하는 오류 발생
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
      className={`fixed w-full h-[70px] shadow z-40 flex items-center hover:bg-accent transition-colors duration-300 ${
        isScrolled ? 'bg-accent' : 'transparent'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* 로고 */}
          <a className="flex items-center gap-2" href="/#hero">
            <div className="h-10 w-12 relative">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
                sizes="5vw"
              />
            </div>
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
                    className="hover:opacity-50 transition duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
