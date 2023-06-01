import Image from 'next/image';

interface SubjectPage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  pageInView: number;
}

export default function SubjectPage({
  id,
  title,
  subtitle,
  description,
  pageInView,
}: SubjectPage) {
  console.log(pageInView);
  return (
    <div
      className={`flex ${id % 2 === 0 ? '' : 'flex-row-reverse'} ${
        pageInView === id ? 'opacity-100' : 'hidden opacity-0'
      }`}
    >
      <div className="w-2/3">
        <Image
          alt={`/subjects_${id}`}
          src={`/subjects/sub_${id}.jpg`}
          width={4000}
          height={3000}
          priority
        />
      </div>
      <div className="w-1/3 p-10 space-y-3">
        <h2 className="text-3xl font-bold">{title}</h2>
        <h2 className="text-xl text-gray-400">{subtitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
