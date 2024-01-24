import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function Booklist() {
    const obj = useOutletContext();
    return (
        <div>
            <h1>Book list {obj[0]}</h1>
            <div className="flex flex-col">
                <Link to="/books/1">Book 1</Link>
                <Link to="/books/2">Book 2</Link>
                <Link to="/books/new">New Book</Link>
            </div>
        </div>
    )
}
