import React, { useEffect, useState } from 'react'

export default function ForYourPleasureItems() {
    const [coffeeCatalog, setCoffeeCatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getCoffeeData = async () => {
            const result = await fetch('http://localhost:5000/coffee');
            const coffee = await result.json()
            setCoffeeCatalog(coffee);
            setLoading(false);
        }
        getCoffeeData();
        return () => setCoffeeCatalog([])
    }, []);

    if (loading) {
        return 'Loading...'
    } else {
        return (
            <div className="shop__wrapper">
                {coffeeCatalog.map((item) => {
                    return (
                        <div className="shop__item" key={item.id}>
                            <img src={item.url} alt="coffee" />
                            <div className="shop__item-title">
                                {item.name}
                            </div>
                            <div className="shop__item-country">{item.country}</div>
                            <div className="shop__item-price">{item.price}</div>
                        </div>)
                })}
            </div>
        )
    }
}

