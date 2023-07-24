import React from 'react'
import { Link } from 'react-router-dom'
import logoBlack from '../logo/LogoBlack.svg'
import logoBeansDark from '../logo/BeansLogoDark.svg'


export default function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to={"/"}>
                                    <img src={logoBlack} alt="logo" />
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to={"/OurCoffee"}><div className='footer__item-link'>Our coffee</div></Link>
                            </li>
                            <li className="footer__item">
                                <Link to={"/ForYourPleasure"}><div className='footer__item-link'>For your pleasure</div></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img
                    class="beanslogo"
                    src={logoBeansDark}
                    alt="Beans logo"
                />
            </div>
        </footer>
    )
}
