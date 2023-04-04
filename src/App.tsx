import "./App.scss";

// components
import Hero from "./Components/Hero/Hero";
import Articles from "./Components/Articles/Articles";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ padding: "0 10%",margin:"0 0 20rem 0" }}>
        <Hero />
        <Articles />
      </main>
    </div>
  );
}

export default App;
