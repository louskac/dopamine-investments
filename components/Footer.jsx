'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants, slideIn } from '../utils/motion';
import { TypingText } from './CustomTexts';

const Footer = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Dopamine Investments',
          from_email: form.email,
          to_email: 'info@dopamine.investments',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. We will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            telephone: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
        },
      );
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      id="footer"
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <TypingText title="Napište nám" />
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] max-w-[70%] bg-white bg-opacity-5 backdrop-blur-lg p-8 rounded-2xl border-2 border-primary-orange mx-auto"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <h2 className="text-white font-medium mb-4">
                Jedna zpráva a můžeme začít
              </h2>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jméno a příjmení"
                className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <div className="flex gap-4">
                <input
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="Telefoní číslo"
                  className="flex-1 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex-1 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </div>
            </label>
            <label className="flex flex-col">
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Vaše zpráva"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                required
                className="w-6 h-6 rounded-lg mr-4"
              />
              <span className="text-white">
                Potvrzuji zájem o spolupráci a jsem připraven investovat minimálně $100 000
              </span>
            </label>
            <button
              type="submit"
              className="border-[1px] border-primary-orange text-primary-orange py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary"
            >
              {loading ? 'Odesílání...' : 'Odeslat'}
            </button>
          </form>
        </motion.div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <img
              src="/loga/main_white.png"
              alt="logo"
              className="w-[50%] lg:w-[20%] mb-4"
            />
            <p className="font-normal text-[14px] text-white opacity-50">
              © 2024 Dopamine Investments. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
