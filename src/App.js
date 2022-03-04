import "./App.css";

import Scoreboard from "./Components/Scoreboard";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
      <header>
        <title>::Scores::</title>
      </header>
      <main>
        <Title />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
