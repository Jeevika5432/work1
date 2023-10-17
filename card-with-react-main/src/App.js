import React from "react";
import styles from './App.module.css';
import Header from "./components/header";
import Main from './components/Main';



function App() {
  return (
    <main className={styles.container}>
      <Header></Header>
      <Main></Main>
    </main>
  );
}

export default App;
