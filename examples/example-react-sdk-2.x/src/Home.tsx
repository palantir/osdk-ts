import React from "react";
// import { useOsdkClient } from "@osdk/react";
import css from "./Home.module.css";
import Header from "./components/Header";
import NextSteps from "./components/NextSteps";
import Osdk from "./components/Osdk";

function Home(): React.ReactElement {
  // See Ontology and Platform SDK docs in Developer Console on how to
  // use the client object to access Ontology resources and platform APIs
  // const client = useOsdkClient();

  return (
    <div className={css.home}>
      <Header />
      <Osdk />
      <NextSteps />
    </div>
  );
}

export default Home;
