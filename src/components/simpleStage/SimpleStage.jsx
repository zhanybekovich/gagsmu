import React from "react";
import { motion } from "framer-motion";
import "./stage.scss";

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

const SimpleStage = ({ title, info, bgClass }) => {
  return (
    <motion.section
      className={`section simple-stage ${bgClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <div className="container">
        <div className="stage-top">
          <motion.h2
            className="stage-title simple-stage-title"
            custom={1}
            variants={animation}
          >
            {title}
          </motion.h2>
          <motion.div
            className={
              bgClass === "bg-dark"
                ? "simple-stage-info"
                : "simple-stage-info dark"
            }
            custom={2}
            variants={animation}
          >
            <p className="init-group-info">{info}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SimpleStage;
