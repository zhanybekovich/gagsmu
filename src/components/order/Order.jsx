import React from "react";
import { motion } from "framer-motion";
import "./order.scss";

const animation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    },
  }),
};

const Order = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className="order"
    >
      <div className="container">
        <motion.h2
          custom={1}
          variants={animation}
          className="section-title order-main-title"
        >
          Жергиликтүү уставдарды кабыл алуу боюнча тийиштүү
          <br />
          <span>буйруктар жана иш-кагаздар</span>
        </motion.h2>

        <div className="order-inner">
          <motion.div
            custom={2}
            variants={animation}
            className="order-col-title order-col"
          >
            <h3 className="order-icon">
              Кыргыз Республикасынын Министрлер Кабинетине караштуу мамлекеттик
              кызмат жана жергиликтүү өз алдынча башкаруу иштери боюнча
              мамлекеттик агенттиктин
              <br />
              <strong>2022-жылдын 12-декабрындагы № 279 буйругу</strong>
            </h3>
          </motion.div>
          <motion.div custom={3} variants={animation} className="order-col">
            <p className="order-icon">
              «Кыргыз Республикасынын Жергиликтүү жамаатарынын Типтүү уставы»
            </p>
          </motion.div>
          <motion.div custom={3} variants={animation} className="order-col">
            <p className="order-icon">
              Жергиликтүү жамааттын Типтүү уставынын айрым жоболорун турмушка
              ашыруу боюнча усулдук көрсөтмө
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Order;