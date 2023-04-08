import React from "react";
import { motion } from "framer-motion";
import "./charter.scss";

const animate = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.4,
    },
  }),
};

const Charter = () => {
  return (
    <motion.section
      className="section charter"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      <div className="container">
        <motion.h2
          className="section-title charter-title"
          custom={1}
          variants={animate}
        >
          Кыргыз Республикасынын Жергиликтүү жамааттарынын <br />
          <span>Типтүү уставы</span>
        </motion.h2>
        <motion.p
          className="charter-icon charter-txt"
          custom={2}
          variants={animate}
        >
          Белгилүү бир аймактагы жашаган жергиликтүү жамааттардын мүчөлөрүнүн
          биримдиги, ынтымагын, коомдук тартипти жана тынчтыкты камсыз кылууну
          адеп-ахлакты чыңдоону, ички жашоо-тиричилигинин принциптерин жана
          эрежелерин киргизүүгө багытталган
        </motion.p>
        <div className="charter-download">
          <motion.a
            className="charter-link"
            href="../../../static/ustav.docx"
            download
            custom={3}
            variants={animate}
          >
            Уставды көчүрүү
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Charter;
