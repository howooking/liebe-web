import Image from 'next/image';
import Container from './container';

export default function Footer() {
  return (
    <div className="bg-slate-800">
      <Container>
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <h2 className="text-white font-bold">리베동물메디컬센터</h2>
        </div>
      </Container>
    </div>
  );
}
