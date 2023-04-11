import * as React from "react";
import "../styles/styles.scss";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Order from "../components/order/Order";
import Charter from "../components/charter/Charter";
import Stage1 from "../components/stage1/Stage1";
import Stage2 from "../components/stage2/Stage2";
import InitGroup from "../components/initGroup/InitGroup";
import SimpleStage from "../components/simpleStage/SimpleStage";
import Footer from "../components/footer/Footer";

const IndexPage = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <About />
      </header>
      <main>
        <Order />
        <Charter />
        <Stage1 />
        <Stage2 />
        <InitGroup />
        <SimpleStage
          title={"3-Этап"}
          info={
            "Аймактардагы көчөлөргө, кварталдарга  дайындалган демилгечи топтор ар бири өздөрүнүн аймактарындагы жашоочулардан келип түшкөн сунуштарды жумушчу топко беришет"
          }
          bgClass={"bg-dark"}
        />

        <SimpleStage
          title={"4-Этап"}
          info={"Уставдын долбоорун жумушчуу топ иштеп чыгат"}
          bgClass={"bg-light"}
        />
        <SimpleStage
          title={"5-Этап"}
          info={
            "Жергиликтүү курултай  же жыйын дайындалып, жергиликтүү уставдын долбоору  курултайда  талкууланат"
          }
          bgClass={"bg-dark"}
        />
        <SimpleStage
          title={"6-Этап"}
          info={
            "Жергиликтүү курултайда же жыйында, жергиликтүү жамааттардын уставы жактырылат"
          }
          bgClass={"bg-light"}
        />
        <SimpleStage
          title={"7-Этап"}
          info={
            "Жергиликтүү курултайда же жыйында жактырылган устав, Жергиликтүү кеңештин сессиясында бекитилет."
          }
          bgClass={"bg-dark"}
        />
        <SimpleStage
          title={"8-Этап"}
          info={
            "Жергиликтүү жамааттын уставын бекиткен Жергиликтүү кеңештин сессиясынын чечими  Мамлекеттик реестрине киргизүү үчүн уставдын текстин тиркөө менен Кыргыз Республикасынын Юстиция министрлигинин аймактык бөлүмүнө жөнөтүлөт"
          }
          bgClass={"bg-light"}
        />
        <SimpleStage
          title={"9-Этап"}
          info={
            "Уставты колдонууга киргизүү боюнча чогулуштарды, жыйындарды өткөрүү жергиликтүү жашоочулар менен чогулуш, жыйын уюштуруу"
          }
          bgClass={"bg-dark"}
          document={"Жергиликтүү жамааттардын  жыйынынын Протоколунун үлгүсү"}
          documentUrl={"../../../static/protocol-ulgu.docx"}
        />
        <SimpleStage
          title={"10-Этап"}
          info={
            "Кабыл алынган жергиликтүү жамааттардын уставынын аткарылышын уюштуруу көзөмөлдөө (демилгечи топторго жүктөлөт)"
          }
          bgClass={"bg-light"}
        />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Жергиликтуу уставдарды кабыл алуу жол картасы</title>
    <meta
      name="description"
      content="Жергиликтуу уставдарды кабыл алуу жол картасы"
    />
  </>
);
