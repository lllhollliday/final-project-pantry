import React, { useEffect, useState } from "react";
import { dropdownContext } from "./dropdownContext";

export default function DropdownContainer(props) {

    const cuisine = [
        { value: "vietnamese", label: "Vietnamese"},
        { value: "american", label: "American"},
        { value: "chinese", label: "Chinese"},
        { value: "french", label: "French"},
        { value: "italian", label: "Italian"},
        { value: "mediterranean", label: "Mediterranean"},

    ]

    return (
        <dropdownContext.Provider 
        value = {
            {cuisine}
        }
        >
            {props.children}
        </dropdownContext.Provider>
    )
}