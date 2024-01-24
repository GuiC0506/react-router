import React from "react";
import { Outlet } from "react-router-dom";
//Outlet: renders nested elements inside that parent route.

export default function BookLayout() {
    return (
        <>
            <h1>A simple book layout</h1>
            <Outlet context={["username", "age"]} />
        </>
        
    )
}
