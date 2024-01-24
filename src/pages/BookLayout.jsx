import React, { useState } from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";
//Outlet: renders nested elements inside that parent route.

export default function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({n: 3});
    const number = searchParams.get("n");
    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br />
            <Link to={`/books/new`}>New Book</Link>
            <br />
            <Outlet context={["username", "age"]}/>
            <input type="number" value={number} onChange={e => setSearchParams({n: e.target.value})}/>
        </>
        
    )
}
