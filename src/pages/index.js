import * as React from "react";
import "../styles/styles.scss";
import Navbar from "../components/navbar/Navbar";

const IndexPage = () => {
  return (
    <main>
      <header className="header">
        <Navbar />
      </header>
    </main>
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
