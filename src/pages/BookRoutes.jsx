import React from "react";
import { Routes, Route } from "react-router-dom";
import Booklist from "./Booklist";
import NewBook from "./NewBook";
import Books from "./Book";
import BookLayout from "./BookLayout";

export default function BookRoutes() {
    return (
        <div>
            <Routes>
                <Route element={<BookLayout />}>
                    <Route index element={<Booklist />} />
                    <Route path=":id" element={<Books />}/>
                    <Route path="new"element={<NewBook />}/>
                </Route>
            </Routes>
        </div>
    )
}
