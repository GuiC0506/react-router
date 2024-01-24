import React from "react";
import { useParams } from "react-router-dom";


export default function Books() {
    const { id } = useParams()
    console.log(id)
    return (
        <h1>Books {id}</h1>
    )
}
