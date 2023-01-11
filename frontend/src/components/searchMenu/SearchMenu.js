import React, { useState} from 'react'
import styles from "./searchMenu.css"
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

/* import Dropdown from './dropdown' */

const SearchMenu = () => {

    const [ click, setClick ] = useState(false);
    const [ dropdown, setDropdown ] = useState(false)


    return (
        <div>

            <form className='form'>
                <label htmlFor="header-search">
                    <span className={styles["searchBar"]}></span>
                </label>

                <input
                type="text"
                id="header-search"
                placeholder="What you would like to cook with?"
                name="s" 
                 />

                {/* <button type="submit">Search</button> */}

            </form>

            <div className='dropdown-container'>

                <div  className="nav-item">
                    <Link

                        className='dropdown-menu'
                        onClick
                    >
                        cuisine <i className='fas fa-caret-down'/>
                    </Link>

                    {dropdown && <Dropdown/>}
                </div>

                <div  className="nav-item">
                    <Link

                        className='dropdown-menu'
                        onClick
                    >
                        mealtype <i className='fas fa-caret-down'/>
                    </Link>

                    {dropdown && <Dropdown/>}
                </div>

                <div  className="nav-item">
                    <Link

                        className='dropdown-menu'
                        onClick
                    >
                        diet <i className='fas fa-caret-down'/>
                    </Link>

                    {dropdown && <Dropdown/>}
                </div>
            </div>

        </div>
)
}

export default SearchMenu;