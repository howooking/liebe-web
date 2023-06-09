'use client';

import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MissionCardProps {
  id: number;
  engTitle: string;
  korTitle: string;
  subTitle: string;
}

export default function MissionCard({
  id,
  engTitle,
  korTitle,
  subTitle,
}: MissionCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col flex-1"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.3 * id }}
    >
      <Image
        alt={`mission_${id}.jpg`}
        src={`/missions/msn_${id}.jpg`}
        width={463}
        height={375}
        className="py-8 w-full"
      />
      <div className="p-3">
        <h3 className="text-lg text-gray-500">{engTitle}</h3>
        <h3 className="text-3xl font-bold py-2">{korTitle}</h3>
        <Separator className="my-3" />
        <p className="break-keep">{subTitle}</p>
      </div>
    </motion.div>
  );
}
