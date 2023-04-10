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
      </main>
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
