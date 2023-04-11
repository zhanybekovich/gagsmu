import React from "react";
import { motion } from "framer-motion";
import "./init-group.scss";

const animation = {
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

const InitGroup = () => {
  return (
    <motion.section
      className="section init-group"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
    >
      <div className="container">
        <motion.h2
          className="section-title init-group-title"
          custom={1}
          variants={animation}
        >
          Демилгечи топ
        </motion.h2>
        <motion.p className="init-group-info" custom={2} variants={animation}>
          Демилгечи топтун курамына аймактагы жергиликтүү жамааттардын сунушунун
          негизинде жергиликтүү жамааттардын мүчөлөрү, ЖӨБО тиешелүү
          кызматкерлери киргизилет
          <br />
          <strong>
            <a href="../../../static/demilge-top-buiruk.docx" download>
              Демилчечи топту бекитүү буйруктун үлгүсү
            </a>
          </strong>
        </motion.p>
        <motion.h3 custom={3} variants={animation}>
          Аймактардагы көчөлөргө, кварталдарга дайындалган демилгечи топ
          төмөнкүлөргө милдеттүү
        </motion.h3>
        <motion.p className="init-group-info" custom={4} variants={animation}>
          Ар бир дайындалган демилгечи топ өздөрүнүн көчөлөрүндөгү,
          кварталдарындагы жергиликтүү жашоочуларга
          <strong>
            «Кыргыз Республикасынын Жергиликтүү жамаатарынын Типтүү уставын»
          </strong>
          тааныштырып, түшүндүрүү иштерин жүргүзүп, демилгечи топ өздөрүнүн
          аймактарында ватсап топторун түзөт
        </motion.p>
      </div>
    </motion.section>
  );
};

export default InitGroup;
