import Image from 'next/image';
import Container from './container';

export default function Footer() {
  return (
    <div className="bg-gray-500 py-4">
      <Container>
        <div className="flex justify-between text-white items-center">
          <div className="flex items-center gap-2">
            <div>
              <h2 className="font-bold text-lg">리베동물메디컬센터</h2>
              <div>서울특별시 송파구 삼전로 56 리베동물메디컬센터</div>
              <div>liebeamc2@daum.net</div>
              <div>
                Copyright (c) 2014 리베동물메디컬센터 All Rights Reserved.
              </div>
            </div>
          </div>
          <div>
            <div className="text-accent font-bold text-2xl">02-6953-7502</div>
            <div>사업자 등록번호 : 530-36-01377</div>
            <div>상호 : 리베동물메디컬센터</div>
            <div>대표 : 김홍석</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
