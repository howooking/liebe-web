'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  // const fadeIn = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 4 } },
  // };

  const slideIn = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      transition={{ ease: 'easeOut', duration: 1 }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileInView="visible"
      variants={slideIn}
    >
      <h2 className="text-3xl text-accent font-bold">{title}</h2>
      <h3 className="text-xl text-gray-600">{subTitle}</h3>
    </motion.div>
  );
}
