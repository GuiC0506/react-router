import React from "react";
import { Outlet, Link } from "react-router-dom";
//Outlet: renders nested elements inside that parent route.

export default function BookLayout() {
    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            <br />
            <Outlet context={["username", "age"]}/>
        </>
        
    )
}
