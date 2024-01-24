import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./index.css";
import BookRoutes from "./pages/BookRoutes";
import Shop from "./pages/Shop";
import ShopList from "./pages/Shoplist";
import NewShop from "./pages/NewShop";
import ShopLayout from "./pages/ShopLayout";

function App() {
    // it is possible to have multiple routes with the same path,
    // rendering different things at the same page.

    // it is possible to neste routes(Route) inside routes(Route)
    // sharing the same base URL
    // in this case, the parent route can have child routes that inherits
    // a specific layout, through the call of the <Outlet /> component on the parent elem.
    
    // Outlet component can pass a context to the child routes of that parent.
    
    // replace: make the route, when it has it set to true, to back 2 routes
    // when back button is clicked, instead of one.
    // it is like you have never been on the current page. Does not keep track
    // of the current page.
    return (
        <>
            <Routes location="/books">
                <Route path="/books" element={<h2>Top books</h2>} />
            </Routes>
            <nav className="bg-slate-300 h-[120px]">
                <ul>
                    <Link to="/" replace>Home</Link>
                    <br />
                    <NavLink to="/about"
                    style={({isActive}) => (isActive ? {color: "red"} : {})}
                    >
                    {({isActive}) => {
                        return isActive ? "About Active" : "About not active";
                    }} 
                    </NavLink>
                    <Link to="/books">Book List</Link>
                    <Link to="/shops">Shop List</Link>
                </ul>
            </nav>
            <Routes>
                <Route path="/shops" element={<h2>Another shop route here</h2>} />
            </Routes>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/books/*" element={<BookRoutes />} />
                <Route path="/shops" element={<ShopLayout />}>
                    <Route index element={<ShopList />} />
                    <Route path=":id" element={<Shop />} />
                    <Route path="new" element={<NewShop />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
