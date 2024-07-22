'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section class="bg-white" id="home">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 mx-24 lg:mx-72">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Pomáháme investorům uspět ve světě kryptoměn
        </motion.h1>
        <motion.p variants={textVariant(1.1)} class="text text-xl text-center pb-28">
          Dopamine Investments je plně regulovaný kryptoměnový fond, jehož cílem je dlouhodobě dosahovat nejlepšího poměru rizika a výnosu. Naše dlouholeté znalosti trhu kryptoměn ve spojení s aktivní správou kapitálu a odpovídajícím risk managementem nabízí investorům příležitost zařadit tato digitální aktiva do jejich portfolia.
        </motion.p>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1.5)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <img src="/patern2.png" alt="logo" className="absolute -top-4 left-0 mb-4" />
        <div className="relative w-full h-[300px]">
          <div className="skewed-background mt-[200px]"></div>
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
