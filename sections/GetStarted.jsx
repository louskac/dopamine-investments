'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10 `} id="market">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 pt-48`}
    >
      <img src="/bacground_logo_white.png" alt="logo" className="absolute top-72 -left-40 mb-4" />
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/graph.svg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={`fadeIn('left', 'tween', 0.2, 1)`}
        className="flex-[0.75] flex flex-col items-center"
      >
        <TypingText title="Proč investovat do kryptoměn?" />
        <TitleText title={<>6200%</>} />
        <motion.p
          variants={`textVariant(1.1)`}
          className="text text-xl pb-28 text-white mt-4"
        >
          O tolik vyrostl trh s kryptoměnami od roku 2017 do dnes. Tradiční trhy nenabízejí takové příležitosti ke zhodnocení jako právě trh kryptoměn. Segment projektů, na které se zaměřujeme, je z pohledu expertní znalosti ten nejnáročnější. V předchozích letech však přinesl zhodnocení v řádech tisíců procent a pokračující adopce kryptoměn podporuje naši tezi o potenciálu tohoto trhu do budoucna.
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
