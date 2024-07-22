'use client';
import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { team } from "../constants"; // Ensure this path is correct and `services` is defined

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const ServiceCard = ({ index, image, title, text, a }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='py-5 px-12 xl:min-w-[300px] xl:min-h-[280px] xl:flex justify-evenly items-center xl:flex-col'
      >
        <img src={image} alt="Team member" />
        <h2 className='text-white font-bold text-center'>
          {title}
        </h2>
        <p class="text-white text-center">{text}</p>
        <a href={a}><img src="/linkedin.svg" alt="LinkedIn link" class="h-[32px] mt-4"/></a>
      </div>
    </motion.div>
  </Tilt>
);

const Insights = () => (
  <section id="team" className={`${styles.paddings} relative z-10`}>
    <img src="/patern4.png" alt="logo" className="absolute top-10 left-0" />
    <img src="/paternwhite2.png" alt="logo" className="absolute bottom-0 left-0 mb-4" />
    <img src="/paternwhite.png" alt="logo" className="absolute top-80 right-0" />
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col mt-16`}
    >
      <TypingText title="Náš tým" textStyles="text-center" />

      <div className='my-20 flex flex-row gap-10 overflow-x-auto'>
        {team?.length > 0 ? (
          team.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        ) : (
          <p>No services available.</p>
        )}
      </div>
    </motion.div>
  </section>
);

export default Insights;
