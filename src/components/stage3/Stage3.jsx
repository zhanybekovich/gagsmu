import React from "react";
import { motion } from "framer-motion";
import "./stage3.scss";

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

const Stage3 = () => {
  return (
    <motion.section
      className="section stage-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <div className="container">
        <div className="stage-top">
          <motion.h2
            className="stage-title stage-3-title"
            custom={1}
            variants={animation}
          >
            3-Этап
          </motion.h2>
          <motion.div className="stage-3-info" custom={2} variants={animation}>
            <p className="init-group-info">
              Аймактардагы көчөлөргө, кварталдарга дайындалган демилгечи топтор
              ар бири өздөрүнүн аймактарындагы жашоочулардан келип түшкөн
              сунуштарды жумушчу топко беришет
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Stage3;
