import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo/Logo.svg'

export default function Header() {
    return (
        <header>
            <ul className="header">
                <Link to={"/"}><li className="header__item">
                    <img src={logo} alt="logo" />
                </li></Link>
                <li className="header__item">
                    <Link to={"/OurCoffee"} style={{ textDecoration: 'none' }}><div className='header__item-link'>Our coffee</div></Link>
                </li>
                <li className="header__item">
                    <Link to={"ForYourPleasure"} style={{ textDecoration: 'none' }}><div className='header__item-link'>For your pleasure</div></Link>
                </li>
            </ul>
        </header>
    )
}
