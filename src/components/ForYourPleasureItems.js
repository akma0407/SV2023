import React, { useEffect, useState } from 'react'
import CoffeeCatalogItem from './CoffeeCatalogItem';

export default function ForYourPleasureItems() {
    const [coffeeCatalog, setCoffeeCatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getCoffeeData = async () => {
            const result = await fetch('http://localhost:5000/coffee');
            const coffee = await result.json()
            console.log(coffee);
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
            <div className="coffee__item">
                {coffeeCatalog.map((item) => {
                    return <CoffeeCatalogItem
                        coffeeName={item.name}
                        price={item.price}
                        imgUrl={item.url}
                        country={item.country}
                        countryExist={true}
                    ></CoffeeCatalogItem>
                })}
            </div>
        )
    }
}

