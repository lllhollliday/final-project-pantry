import React, { useEffect, useState } from "react";
import { globalContext } from "./globalContext";

export default function GlobalContainer(props) {

    const [ recipes, setRecipes ] = useState(null)

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setRecipes(result.data)
    })
    }, [])

    return(
        <globalContext.Provider value={{recipes, setRecipes}}>

            {props.children}
            
        </globalContext.Provider>

    )

    
}