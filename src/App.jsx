import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Book";
import Booklist from "./pages/Booklist";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";

function App() {
    return (
        <>
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
                <Route path="/books/" element={<Booklist />} />
                <Route path="/books/:id" element={<Books />} />
                <Route path="/books/new" element={<NewBook />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
