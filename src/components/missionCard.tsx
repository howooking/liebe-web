import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col flex-1"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.3 * index }}
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
