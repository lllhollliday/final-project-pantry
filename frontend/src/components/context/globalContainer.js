import React, { useEffect, useState } from "react";
import { globalContext } from "./globalContext";

export default function globalContainer(props) {



    const cuisine = [
        { value: "vietnamese", label: "Vietnamese"},
        { value: "american", label: "American"},
        { value: "chinese", label: "Chinese"},
        { value: "french", label: "French"},
        { value: "italian", label: "Italian"},
        { value: "mediterranean", label: "Mediterranean"},
    ]

    return (
        <globalContext.Provider 
        value = {
            {cuisine}
        }
        >
            {props.children}
        </globalContext.Provider>
    )
}