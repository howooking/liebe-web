import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

interface MissionCardProps {
  img: string;
  engTitle: string;
  korTitle: string;
  subTitle: string;
  index: number;
}

export default function MissionCard({
  img,
  engTitle,
  korTitle,
  subTitle,
  index,
}: MissionCardProps) {
  return (
    <motion.div
      className="flex flex-col flex-1"
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 * index }}
    >
      <Image
        alt={img}
        src={`/${img}.jpg`}
        width={463}
        height={375}
        className="pb-8"
      />
      <h3 className="text-lg text-gray-500">{engTitle}</h3>
      <h3 className="text-3xl font-bold">{korTitle}</h3>
      <Separator className="my-3" />
      <p className="text-sm break-keep">{subTitle}</p>
    </motion.div>
  );
}
