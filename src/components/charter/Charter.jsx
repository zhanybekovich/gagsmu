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
      delay: custom * 0.3,
    },
  }),
};

const Charter = () => {
  return (
    <motion.section
      className="section charter"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <div className="container">
        <motion.h2
          className="section-title charter-title"
          custom={1}
          variants={animate}
          id="charter"
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
        <motion.div className="charter-info" custom={3} variants={animate}>
          <h3>Жергиликтүү жамааттын типтүү уставы 8 бөлүктөн турат</h3>
          <ol>
            <li>Жалпы жоболор</li>
            <li>Жергиликтүү өз алдынча башкаруу органдары </li>
            <li>Жергиликтүү маанидеги маселелер </li>
            <li>
              Жергиликтүү жамааттын жергиликтүү өз алдынча башкарууну жүзөгө
              ашырууга түз катышуу формалары
            </li>
            <li>
              Жергиликтүү жамааттын ички жашоо-тиричилигинин негизги принциптери
              жана эрежелери
            </li>
            <li>
              Жергиликтүү жамааттын башка тараптар (субъектилер) менен алака
              жүргүзүүсүнүн тартиби
            </li>
            <li>
              Жергиликтүү жамааттарда жарандардын өз алдынча уюмдашышынын
              экономикалык – чарбалык негиздери
            </li>
            <li>Корутунду жоболор</li>
          </ol>
          <div className="charter-download">
            <motion.a
              className="charter-link"
              href="../../../static/ustav.docx"
              download
            >
              Уставды көчүрүү
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Charter;
