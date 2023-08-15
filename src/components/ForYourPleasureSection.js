import React from 'react'
import coffeeitem2 from "../img/Mas_ Group2.png"
import logoBeansDark from '../logo/BeansLogoDark.svg'
import ForYourPleasureItems from './ForYourPleasureItems'

export default function ForYourPleasureSection({ searchingWord, selectedCountry }) {
    return (
        <div>
            <section className="foryoupleasure">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src={coffeeitem2} alt="coffee_item" />
                        </div>

                        <div className='col-lg-4'>
                            <div className="title">About our goods</div>
                            <img className="beanslogo" src={logoBeansDark} alt="Beans logo" />
                            <div className="shop__text" >
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br></br>
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions.
                                <br></br>
                                As greatly removed calling pleased improve an.
                                <br></br>Last ask him cold feel
                                met spot shy want.
                                <br></br>Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </div>
                        </div>
                        <div className="line"></div>
                        <ForYourPleasureItems></ForYourPleasureItems>
                    </div>
                </div>
            </section>
        </div>
    )
}
