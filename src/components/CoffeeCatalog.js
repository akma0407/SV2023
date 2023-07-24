import React, { useEffect, useState } from 'react'
import CoffeeCatalogWrapper from './CoffeeCatalogWrapper';

export default function CoffeeCatalog({ searchingWord, selectedCountry }) {
    const [coffeeCatalogList, setCoffeeCatalogList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cleanData, setCleanData] = useState([]);
    useEffect(() => {
        const getCoffeeData = async () => {
            const result = await fetch('http://localhost:5000/coffee');
            const coffee = await result.json()
            setCoffeeCatalogList(coffee);
            setLoading(false);
            setCleanData(coffee);
        }
        getCoffeeData();
        return () => setCoffeeCatalogList([]);
    }, []);
    if (loading) {
        return 'Loading...';
    } else {
        if (searchingWord === "") {
            if (selectedCountry.length === 0) {
                return (
                    <CoffeeCatalogWrapper coffeeCatalogList={cleanData}></CoffeeCatalogWrapper>
                );
            } else {
                return (
                    <CoffeeCatalogWrapper
                        coffeeCatalogList={cleanData.filter((item) => {
                            if (selectedCountry.includes(item.country)) {
                                return item;
                            }
                        })}
                    ></CoffeeCatalogWrapper>
                );
            }
        } else {
            return (
                <CoffeeCatalogWrapper
                    coffeeCatalogList={coffeeCatalogList
                        .filter(
                            (item) =>
                                item.country
                                    .toLowerCase()
                                    .includes(searchingWord.toLowerCase()) ||
                                item.name.toLowerCase().includes(searchingWord.toLowerCase())
                        )
                        .filter((item) => {
                            if (selectedCountry.length === 0) {
                                return item;
                            } else {
                                if (selectedCountry.includes(item.country)) {
                                    return item;
                                }
                            }
                        })}
                ></CoffeeCatalogWrapper>
            );
        }
    }
}


