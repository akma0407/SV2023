import React, { useEffect, useState } from 'react'
import CoffeeCatalogItem from './CoffeeCatalogItem';

export default function TopCoffeeCatalog() {
    const [coffeeCatalog, setCoffeeCatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getCoffeeData = async () => {
            const result = await fetch('http://localhost:5000/bestsellers');
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
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="best__wrapper">
                        {coffeeCatalog.map((item) => {
                            return <CoffeeCatalogItem
                                coffeName={item.name}
                                price={item.price}
                                imgUrl={item.url}
                                country={null}
                                countryExist={false}
                            ></CoffeeCatalogItem>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
