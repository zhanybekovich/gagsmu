import React from "react";
import { motion } from "framer-motion";
import "./stage1.scss";

const animation = {
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

const Stage1 = () => {
  return (
    <motion.section
      id="stages"
      className="section stage-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <div className="container">
        <motion.h2 className="section-title" custom={1} variants={animation}>
          Жергиликтүү жамааттарынын уставын <br />
          <span>ишке ашыруу этаптары</span>
        </motion.h2>
        <div className="stage-top">
          <motion.h3 className="stage-title" custom={2} variants={animation}>
            1-Этап
          </motion.h3>
        </div>
        <div className="stage-1-steps">
          <motion.p custom={3} variants={animation}>
            Агенттиктин буйругу
          </motion.p>
          <motion.p custom={4} variants={animation}>
            Жергиликтүү жамааттын Типтүү уставы
          </motion.p>
          <motion.p custom={5} variants={animation}>
            Жергиликтүү жамааттын Типтүү уставынын айрым жоболорун турмушка
            ашыруу боюнча усулдук көрсөтмө
          </motion.p>
        </div>
        <motion.p className="stage-1-final" custom={6} variants={animation}>
          Айыл өкмөт же шаар мэринин чечими менен уставдын долбоорун иштеп чыгуу
          боюнча жумушчу, демилгечи топтор түзүлөт (Устав 41 пункт)
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Stage1;
