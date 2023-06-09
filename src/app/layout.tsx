import Navbar from '@/components/navbar';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Floatings from '@/components/floatings';
import { Metadata } from 'next';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '리베동물메디컬센터',
  description: '리베동물병원 리베동물메디컬센터 24시동물병원',
  keywords: [
    '리베동물병원, 동물병원, 동물의료센터, 서울24시동물병원, 24시동물병원, 강아지암, 강아지암센터, 고양이암, 고양이내과, 고양이병원, 고양이동물병원, 고양이전문병원, 강아지건강검진, 고양이건강검진, 강아지mri, 고양이mri, 동물mri, 동물병원mri, 강아지ct, 고양이ct, 동물ct, 동물병원ct, 특수동물, 특수동물진료, 햄스터진료, 파충류진료, 설치류진료, 토끼진료, 앵무새진료, 슈가글라이더진료, 라쿤진료 강아지심장병, 고양이심장병, 강아지신부전, 강아지신장, 강아지쿠싱증후군, 고양이신부전, 강아지투석, 줄기세포동물병원, 강아지줄기세포, 고양이줄기세포, 강아지마취,고양이마취, 강아지치과, 강아지스케일링, 동물치과, 동물치과병원, 강아지치석제거, 고양이스케일링, 고양이구내염, 고양이치과, 고양이치과병원, 강아지안과, 강아지안과병원, 강아지안과전문병원, 안과전문동물병원, 강아지녹내장, 강아지백내장,  고양이안과, 고양이백내장, 고양이녹내장, 강아지수혈, 고양이수혈, 강아지한방병원, 강아지한의원, 강아지침치료, 동물한방병원, 한방동물병원, 강아지재활, 강아지재활센터, 강아지수중재활, 강아지수중런닝머신',
  ],
  robots: 'INDEX,FOLLOW',
  verification: {
    google: '1234567890',
    yandex: '1234567890',
    me: '1234567890',
  },
  authors: { name: '이정우', url: 'junsgk@gmail.com' },
  category: 'animal hospital',
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: '리베동물메디컬센터',
    description: '24시동물병원, 강남동물병원, 특수동물병원',
    siteName: '리베동물메디컬센터',
    images: [
      {
        url: 'http://www.liebeamc.com/img/main_top_logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} select-none`}>
        <Navbar />
        {children}
        <Floatings />
      </body>
    </html>
  );
}
