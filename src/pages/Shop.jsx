import React from "react";
import { useParams } from "react-router-dom"

export default function Shop() {
    const params = useParams();
    return <h2>SHOP {params.id}</h2>;
}
