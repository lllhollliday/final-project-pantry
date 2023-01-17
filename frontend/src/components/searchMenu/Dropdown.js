import React, { useState } from "react";
import { cuisine } from "../../dropdownItems";
import { Link } from "react-router-dom";
//import { dropdownContext } from "../context/dropdownContext";
import "./dropdown.css"


const Dropdown = () => {

    const [ click, setClick ] = useState(false)

    const handleClick = () => setClick(!click)


    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {cuisine.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link className={item.label} onClick={()=> setClick(false)}/>
                            {}
                        </li>
                    )
                })}
            </ul>
        </>
    )

}

export default Dropdown;