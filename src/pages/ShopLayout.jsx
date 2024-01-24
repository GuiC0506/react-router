import React from "react";
import { Outlet } from "react-router-dom";

export default function ShopLayout() {
    return (
        <div>
             <h1>A SIMPLE SHOP LAYOUT</h1>
             <Outlet context={{name: "Guilherme"}} />
        </div>
    )
}
