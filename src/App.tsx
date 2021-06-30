import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <AdDesigner />
        <Votes />
      </section>
    </div>
  );
}

export default App;
