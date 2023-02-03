import React, { useEffect, useState } from "react";
import { globalContext } from "./globalContext";
 
export default function GlobalContainer(props) {

    const [ recipes, setRecipes ] = useState(null)
    const [ user, setUser ] = useState(null)
    const [ sliderItems, setSliderItems] = useState([]);
    console.log(user)
    useEffect( () => {
        fetch(`http://localhost:8000/recipes?random=true`)
 
        .then(res => res.json())
        .then(result => {
            // console.log(result.recipes[0])
            setRecipes(result.recipes)
            setSliderItems(result.recipes.slice())
        })
        fetch(`http://localhost:8000/users/verifyToken`, {method: "GET", headers: {"token": localStorage.getItem("token")}})
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setUser(result.user)
        })
    }, [])

    return(
        <globalContext.Provider value={{recipes, setRecipes, user, setUser, sliderItems}}>

            {props.children}

        </globalContext.Provider>

    )


}

/* ?q=chicken&cuisineType=italian&health=dairy-free&mealType=Breakfast */