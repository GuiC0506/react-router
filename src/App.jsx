import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
        <header className='flex flex-row space-x-10'>
            <h2>Header goes here</h2>
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
