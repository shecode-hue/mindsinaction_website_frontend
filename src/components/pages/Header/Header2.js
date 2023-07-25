import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import "./Header2.css";

function Header2() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li >
                    <NavLink to="/">Languages</NavLink>
                    <ul className='dropdown'>
                        <li>
                            <NavLink to="/">HTML</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">CSS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">JavaScript</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">PHP</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact Us</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header2