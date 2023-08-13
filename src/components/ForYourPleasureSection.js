import React from 'react'
import coffeeitem2 from "../img/Mas_ Group2.png"
import logoBeansDark from '../logo/BeansLogoDark.svg'
import CoffeeCatalog from './CoffeeCatalog'

export default function ForYourPleasureSection({ searchingWord, selectedCountry }) {
    return (
        <div>
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={coffeeitem2} alt="coffee_item" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="title">About our goods</div>
                            <img className="beanslogo" src={logoBeansDark} alt="Beans logo" />
                            <div className="about__text" >
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions.
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="best">
                <div className="container">
                    <div className="line"></div>

                </div>
            </section>
        </div>
    )
}
