import React from "react";
import css from "./Home.module.css";
import Header from "./components/Header";
import NextSteps from "./components/NextSteps";

function Home(): React.ReactElement {
  return (
    <div className={css.home}>
      <Header />
      <NextSteps />
    </div>
  );
}

export default Home;
