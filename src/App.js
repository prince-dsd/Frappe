import React, { useRef, useEffect } from "react";

//Components
import NavBar from "./Components/NavBar/NavBar.component";
import Home from "./Components/Home/Home.component";
import BreadCrumb from "./Components/BreadCrumb/BreadCrumb.component";
import MainContent from "./Components/MainContent/MainContent.component";
import Premier from "./Components/Premier/Premier.component";
import About from "./Components/About/About.component";
import Footer from "./Components/Footer/Footer.component";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const useMountEffetct = (effect) => useEffect(effect, []);
function App() {
  const reach = useRef(null);
  useMountEffetct(() => scrollToRef(reach));
  return (
    <div className="App">
      <NavBar />
      <Home refProp={reach} />
      <BreadCrumb />
      <MainContent />
      <Premier />
      <About />
      <Footer scrollToRef={scrollToRef} reach={reach} />
    </div>
  );
}

export default App;
