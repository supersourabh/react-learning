import { Link, Route, Routes } from "react-router-dom";
import About from "./about";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>Home </li>
          </Link>
          <Link to="/about">
            <li>about </li>
          </Link>
          <Link to="/contact">
            <li>contact </li>
          </Link>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
