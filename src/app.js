import React from "react";

import styles from "./app.css";

import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Services from "./components/services";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <main className={styles.app}>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Services/>
      <Portfolio/>
    </main>
  );
}

export default App;
