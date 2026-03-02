import { Header } from "./components/Header";
import { NextSteps } from "./components/NextSteps";
import { OsdkExample } from "./components/OsdkExample";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <OsdkExample />
        <NextSteps />
      </main>
    </div>
  );
}

export default App;
