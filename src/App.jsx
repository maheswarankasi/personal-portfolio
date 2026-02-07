import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Home />
          <About />
          <Skills />
          <Contact />
          <ScrollToTop />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
