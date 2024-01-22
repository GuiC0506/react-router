import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
        <header>
            <h2 className='text-red-500'>
                Header goes here
            </h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about'element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
