import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
import emblem from "../../../static/img/National_emblem.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <motion.div
          className="motion"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-img">
            <img src={emblem} alt="Кыргыз Республикасынын герби" width={100} />
          </div>

          <h1 className="about-title">
            Кыргыз Республикасынын Министрлер кабинетине караштуу Мамлекеттик
            кызмат жана жергиликтүү өз алдынча башкаруу иштери боюнча
            мамлекеттик агенттиги
          </h1>
          <h2 className="about-subtitle">
            Жергиликтүү жамааттын уставын кабыл алуудагы ишке ашырылуучу этаптар
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
