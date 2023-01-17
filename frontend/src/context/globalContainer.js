import React, { useEffect, useState } from "react";
import { globalContext } from "./globalContext";

export default function GlobalContainer(props) {

    const [ recipes, setRecipes ] = useState(null)

    useEffect( () => {
        fetch(`http://localhost:8000/recipes?recipe=chicken`)
        .then(res => res.json())
        .then(result => {
            console.log(result.recipes[0])
            setRecipes(result.recipes)
        })
    }, [])

    return(
        <globalContext.Provider value={{recipes, setRecipes}}>

            {props.children}

        </globalContext.Provider>

    )


}