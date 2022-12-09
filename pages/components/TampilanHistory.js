import React from "react";
import { useState } from "react";

export default function tampilanHistory({props}) {
    const [count, setCount] = useState(0);
    return (

        <div className="grid grid-cols-3 border box-border text-black text-center items-center">
            <h2 className="ml-2">{props.name}</h2>
            <h2 className="ml-2">{props.amount}</h2>
            <h2 className="ml-2">{props.timestamp}</h2>
        </div>
    )
}