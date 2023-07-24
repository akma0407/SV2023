import React from 'react'
import coffeeitem from "../img/coffee_item.jpg"
import logoBeansDark from '../logo/BeansLogoDark.svg'

export default function ForYourPleasureSection() {
    return (
        <div>
            <section class="shop">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 offset-1">
                            <img class="shop__girl" src={coffeeitem} alt="coffee_item" />
                        </div>
                        <div class="col-lg-4">
                            <div class="title">About it</div>
                            <img class="beanslogo" src={logoBeansDark} alt="Beans logo" />
                            <div class="shop__point">
                                <span>Country:</span>
                                Brazil
                            </div>
                            <div class="shop__point">
                                <span>Description:</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div class="shop__point">
                                <span>Price:</span>
                                <span class="shop__point-price">16.99$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}