import { Header } from "./components/Header";
import { NextSteps } from "./components/NextSteps";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <NextSteps />
      </main>
    </div>
  );
}

export default App;
