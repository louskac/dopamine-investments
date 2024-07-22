'use client';
import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { services } from "../constants"; // Ensure this path is correct and `services` is defined

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const ServiceCard = ({ index, title, text }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='py-5 px-12 xl:min-w-[300px] xl:min-h-[280px] xl:flex justify-evenly items-center xl:flex-col'
      >
        <h2 className='text-white font-bold text-center'>
          {title}
        </h2>
        <p class="text-white text-center">{text}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => (
  <section id="overview" className={`${styles.paddings} relative z-10`}>
    <img src="/bacground_logo_white.png" alt="logo" className="absolute top-72 -left-40 mb-4" />
    <img src="/patern3.png" alt="logo" className="absolute top-10 right-0" />
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col mt-16`}
    >
      <TypingText title="Základní přehled fondu" textStyles="text-center" />

      <div className='mt-20 flex flex-row gap-10 overflow-x-auto'>
        {services?.length > 0 ? (
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        ) : (
          <p>No services available.</p>
        )}
      </div>
    </motion.div>
  </section>
);

export default About;
