import React from "react";
import { motion } from "framer-motion";
import "./stage2.scss";

const listItems = [
  "жергиликтүү кеңештин төрагасы",
  "шаардын мэри",
  "айыл өкмөтүнүн башчысы",
  "жергиликтүү кеңештин депутаттары",
  "шаар мэриясынын же айыл өкмөтүнүн аппаратынын кызматкерлери",
  "жергиликтүү жамааттын мүчөлөрү (тийиштүү шаарда же айылдык аймакта жашаган азчылык улуттардын өкүлдөрүн эске алуу менен)",
  "коммерциялык жана коммерциялык эмес уюмдардын өкүлдөрү (ӨЭУ, КУ, КФ, жаштар комитети, аялдар кеңеши, аксакалдар кеңеши, ишкерлер коомчулугу жана башка шаарда же айылдык аймакта иш алып барган уюмдар)",
];

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

const Stage2 = () => {
  return (
    <motion.section
      className="section stage-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <div className="container">
        <div className="stage-top">
          <motion.h2
            className="stage-title stage-2-title"
            custom={1}
            variants={animation}
          >
            2-Этап
          </motion.h2>
        </div>
        <motion.p className="stage-2-info" custom={2} variants={animation}>
          Уставдын долбоорун иштеп чыгуучу <br /> <span>жумушчу топтун </span>
          курамына төмөнкүлөр кирет:
        </motion.p>

        <motion.ul custom={3} variants={animation}>
          {listItems.map((item, index) => (
            <li key={index} className="stage-2-item">
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.p className="stage-2-final" custom={4} variants={animation}>
          Жумушчу топтун түзүмү жергиликтүү жамааттын жана жергиликтүү өз
          алдынча башкаруу органдарынын сунуштарына ылайык толукталышы же
          өзгөртүлүшү мүмкүн
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Stage2;
