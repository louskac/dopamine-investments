'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.div
    variants={textContainer}
    className={`flex flex-col items-center py-[48px] ${textStyles}`}
  >
    <motion.img
      variants={textVariant2}
      src="/loga/orange.png"
      alt="Little orange Dopamine Ventures logo"
      className="w-[48px] object-contain mb-4"
    />
    <motion.p className="font-light text-[48px] text-white text-center">
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  </motion.div>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center ${textStyles}`}
  >
    {title}
  </motion.h2>
);
