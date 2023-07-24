import React, { useEffect, useState } from 'react'
import OurCoffeeBanner from '../components/OurCoffeeBanner'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import logoBeansDark from '../logo/BeansLogoDark.svg'
console.log(logoBeansDark);

export default function CoffeeDescription() {
    const { id } = useParams();
    const [coffeeDescr, setCoffeeDescr] = useState([]);
    useEffect(() => {
        const coffeeDescrFetch = async () => {
            const data = await fetch(`http://localhost:3000/coffee/${id}`);
            const coffeeDescrJson = await data.json();
            setCoffeeDescr(coffeeDescrJson);
        }
        coffeeDescrFetch();
    })
    return (
        <div>
            <OurCoffeeBanner></OurCoffeeBanner>
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={coffeeDescr.name} alt="coffee_item" />
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About it</div>
                            <img className="beanslogo" src={logoBeansDark} alt="Beans logo" />
                            <div className="shop__point">
                                <span>Country: </span>
                                {coffeeDescr.country}
                            </div>
                            <div className="shop__point">
                                <span>Description: </span>
                                {coffeeDescr.description}
                            </div>
                            <div className="shop__point">
                                <span>Price: </span>
                                <span className="shop__point-price">{coffeeDescr.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
