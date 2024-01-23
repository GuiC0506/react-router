import React from "react";
import { Link } from "react-router-dom";

export default function Booklist() {
    return (
        <div>
            <h1>Book list</h1>
            <div className="flex flex-col">
                <Link to="/books/1">Book 1</Link>
                <Link to="/books/2">Book 2</Link>
                <Link to="/books/new">New Book</Link>
            </div>
        </div>
    )
}
