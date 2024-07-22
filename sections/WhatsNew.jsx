'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} whatsNewWrapper relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <p>ahoj</p>
      <div className="hex-wrap">
        <div className="hex tar negr" data-h2="Jeff Buzz"></div>
        <div className="hex a1" data-h1="Our"></div>
        <div className="hex a2" data-h1="Team"></div>
        <div className="hex" data-h2="Jisim Dove"></div>
        <div className="hex a2"></div>
        <div className="hex hex-layer" id="m1">
          <div className="hex slide-reveal" data-h3="Jeff, CEO"></div>
          <a
            className="hex"
            href="#m1"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MjB8fHBvcnRyYWl0JTJDbWFufGVufDB8fHx8MTYyNjg1NjU0Mg&ixlib=rb-1.2.1&q=80&w=400")`,
            }}
          ></a>
        </div>
        <div className="hex hex-layer" id="m2">
          <div className="hex slide-reveal" data-h3="Jisim, Design lead"></div>
          <a
            className="hex tot"
            href="#m2"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1530785602389-07594beb8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8NXx8cG9ydHJhaXRzfGVufDB8fHx8MTYyNjg1NTk4NA&ixlib=rb-1.2.1&q=80&w=400")`,
            }}
          ></a>
        </div>
        <div className="hex a2"></div>
        <div className="hex tar" data-h2="Simar Chan"></div>
        <div className="hex hex-layer" id="m3">
          <div className="hex slide-reveal" data-h3="Simar, Project Lead"></div>
          <a
            className="hex"
            href="#m3"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1518518873111-6ca469aa4560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MjN8fHBvcnRyYWl0c3xlbnwwfHx8fDE2MjY4NTU5ODQ&ixlib=rb-1.2.1&q=80&w=400")`,
            }}
          ></a>
        </div>
        <div className="hex hex-layer" id="m4">
          <div className="hex slide-reveal" data-h3="Tim, Developer"></div>
          <a
            className="hex tob"
            href="#m4"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1572631382901-cf1a0a6087cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MTB8fHBvcnRyYWl0c3xlbnwwfHx8fDE2MjY4NTU5ODQ&ixlib=rb-1.2.1&q=80&w=400")`,
            }}
          ></a>
        </div>
        <div className="hex negr" data-h2="Tim Lake"></div>
        <div
          className="hex a1"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTE1fDB8MXxzZWFyY2h8MXx8dGVhbXxlbnwwfHx8fDE2MjY4NTg0Mjc&ixlib=rb-1.2.1&q=80&w=400")`,
          }}
        ></div>
        <div className="hex a1"></div>
        <div className="hex a1"></div>
        <a href="#" className="overlay"></a>
      </div>
    </motion.div>
  </section>
);

export default WhatsNew;
