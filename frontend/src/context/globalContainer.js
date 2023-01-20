import React, { useEffect, useState } from "react";
import { globalContext } from "./globalContext";

export default function GlobalContainer(props) {

    const [ recipes, setRecipes ] = useState(null)

    useEffect( () => {
        fetch(`http://localhost:8000/recipes?random=true`)
   /*      `http://localhost:8000/recipes?q=chicken&cuisineType=italian&health=dairy-free&mealType=Breakfast`
 */
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

/* ?q=chicken&cuisineType=italian&health=dairy-free&mealType=Breakfast */