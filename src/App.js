import "./App.css";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App" id="home">
      <Header setShowContact={setShowContact} />
      <Intro showContact={showContact} setShowContact={setShowContact} />
      <Projects />
    </div>
  );
}

export default App;
