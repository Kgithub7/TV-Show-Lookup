import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useRef } from "react";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Nav from "./components/Nav";

function App() {
  const inputRef = useRef(null);

  function activateSearch() {
    inputRef.current.focus();
  }
  return (
    <Router>
      <Nav activateSearch={activateSearch} />
      <Home inputRef={inputRef} />
    </Router>
  );
}

export default App;
