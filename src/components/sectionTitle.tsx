import { motion } from 'framer-motion';

export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  // const fadeIn = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 4 } },
  // };

  const slideIn = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      transition={{ ease: 'easeOut', duration: 1.5 }}
      initial="hidden"
      animate="visible"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={slideIn}
      className="space-y-2 pb-3"
    >
      <h2 className="text-3xl text-accent font-bold">{title}</h2>
      <h3 className="text-xl text-gray-600">{subTitle}</h3>
    </motion.div>
  );
}
