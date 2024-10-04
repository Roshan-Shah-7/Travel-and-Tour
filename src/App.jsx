// import styled from "styled-components";
import "./App.css";
import Navbar from "./assets/Components/Nav/Navbar";
import Hero from "./assets/Components/Hero";
import Population_Destination from "./assets/Components/Population_Destination";
import Services from "./assets/Components/Services";
import Blog from "./assets/Components/Blog";
import Gallry from "./assets/Components/Gallry";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Population_Destination />
      <Services />
      <Blog />
      <Gallry />
    </main>
  );
}

export default App;
