import * as React from "react";
import "../styles/styles.scss";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Order from "../components/order/Order";

const IndexPage = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <About />
      </header>
      <main>
        <Order />
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
