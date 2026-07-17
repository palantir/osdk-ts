import React from "react";

import Header from "@/components/Header";
import NextSteps from "@/components/NextSteps";

import css from "./Home.module.css";

function Home(): React.ReactElement {
  return (
    <div className={css.home}>
      <Header />
      <NextSteps />
    </div>
  );
}

export default Home;
