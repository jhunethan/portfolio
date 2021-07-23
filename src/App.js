import "./App.css";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
