import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import BookRoutes from "./pages/BookRoutes";

function App() {
    // it is possible to have multiple routes with the same path,
    // rendering different things.
    return (
        <>
            <Routes location="/books">
                <Route path="/books" element={<h2>Top books</h2>} />
            </Routes>
            <nav className="bg-slate-300 h-[120px]">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/books">Book List</Link>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/books/*" element={<BookRoutes />}>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
