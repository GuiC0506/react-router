import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";

function App() {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App
