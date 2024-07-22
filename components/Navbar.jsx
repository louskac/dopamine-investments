'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigateTo = (route) => {
    router.push(route);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-20 relative flex flex-col items-center justify-center`}
      >
        <img src="/loga/main.png" alt="logo" className="w-[50%] lg:w-[20%] mb-4" />
        <img src="/bacground_logo_orange.png" alt="logo" className="absolute top-0 left-0 mb-4" />
        <img src="/patern1.png" alt="logo" className="absolute top-0 right-0 mb-4" />
      </motion.nav>

      <div className="fixed top-4 left-4 z-[100]"> {/* Fixed position with high z-index */}
        <div
          className="bg-[#E19600] p-4 cursor-pointer"
          style={{
            clipPath: 'polygon(50% 0%, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%)',
            borderRadius: '25px',
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? '/x.svg' : '/menu.svg'} alt="menu" className="w-8 h-8" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <div className="text-white text-4xl space-y-8 text-center">
            <p className="cursor-pointer" onClick={() => navigateTo('#home')}>Domů</p>
            <p className="cursor-pointer" onClick={() => navigateTo('#market')}>Trh</p>
            <p className="cursor-pointer" onClick={() => navigateTo('#advantages')}>Přednosti</p>
            <p className="cursor-pointer" onClick={() => navigateTo('#team')}>Tým</p>
            <p className="cursor-pointer" onClick={() => navigateTo('#overview')}>Přehled</p>
            <p className="cursor-pointer" onClick={() => navigateTo('#footer')}>Kontakt</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
