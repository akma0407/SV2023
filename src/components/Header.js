import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo/Logo.svg'

export default function Header() {
    return (
        <header>
            <ul className="header">
                <li className="header__item">
                    <Link to={"/"}><img src={logo} alt="logo" /></Link>
                </li>
                <li className="header__item">
                    <Link to={"/OurCoffee"}><div className='header__item-link'>Our coffee</div></Link>
                </li>
                <li className="header__item">
                    <Link to={"ForYourPleasure"}><div className='header__item-link'>For your pleasure</div></Link>
                </li>
            </ul>
        </header>
    )
}