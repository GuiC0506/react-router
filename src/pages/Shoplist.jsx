import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function ShopList() {
    const obj = useOutletContext();
    return  (
        <div>
            <Link to="/shops/1">SHOP 1 {obj.name}</Link>
            <br />
            <Link to="/shops/2">SHOP 2 {obj.name}</Link>
        </div>
    )
}
