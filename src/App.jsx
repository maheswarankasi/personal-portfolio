import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./routes/Approutes";
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <ErrorBoundary>
      <Approutes />
    </ErrorBoundary>
    </BrowserRouter>
    </>
  );
}

export default App;
