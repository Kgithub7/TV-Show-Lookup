import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
