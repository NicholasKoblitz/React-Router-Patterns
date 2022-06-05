import React from "react";
import { useParams } from "react-router-dom";

const Color = () => {

    const {color} = useParams();

    return (
        <div style={{backgroundColor: color, width: "100vw", height: "100vh"}}>
            <h1>The screen is now {color}</h1>
        </div>
    )

}

export default Color