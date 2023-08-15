import React, { useEffect, useState } from 'react'
import OurCoffeeBanner from '../components/OurCoffeeBanner'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import logoBeansDark from '../logo/BeansLogoDark.svg'

export default function CoffeeDescription({ imgUrl, country, description, price }) {
    const { id } = useParams();
    const [coffeeDescr, setCoffeeDescr] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const coffeeDescrFetch = async () => {
            const data = await fetch(`http://localhost:5000/coffee/${id}`);
            const coffeeDescrJson = await data.json();
            setCoffeeDescr(coffeeDescrJson);
            setLoading(false);
        }
        coffeeDescrFetch();
    }, [id]);
    if (loading) {
        return 'Loading...';
    } else
        return (
            <div>
                <OurCoffeeBanner></OurCoffeeBanner>
                <section className="foryourpleasure">
                    <div className="container">
                        <div className="row">
                            <div className="foryourpleasure__wrapper">
                                <div className="foryourpleasure__img">
                                    <img src={coffeeDescr.url} alt="coffee_item" />
                                </div>
                                <div className="foryourpleasure__box">
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
                    </div>
                </section>
                <Footer></Footer>
            </div>
        )
}
