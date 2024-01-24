import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function Booklist() {
    const obj = useOutletContext();
    return (
            <h1>Book list {obj[0]}</h1>
    )
}
