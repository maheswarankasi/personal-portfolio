import "./App.css";
import Home from "./components/Home";
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/Projects";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Home />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        <ScrollToTop />
      </ErrorBoundary>
    </>
  );
}

export default App;
