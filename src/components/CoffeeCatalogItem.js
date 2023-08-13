import React from 'react'
import { Link } from 'react-router-dom'

export default function CoffeeCatalogItem({ id, price, country, coffeeName, imgUrl, countryExist }) {
    if (countryExist) {
        return (<div>
            <Link to={`/CoffeeDescription/${id}`}>
                <div className="best__item" key={id}>
                    <img src={imgUrl} alt="coffee" />
                    <div className="best__item-title">
                        {coffeeName}
                    </div>
                    <div className="shop__item-country">{country}</div>
                    <div className="best__item-price">{price}</div>
                </div>
            </Link>
        </div>
        )
    } else {
        return (
            <div className="best__item" key={id}>
                <img src={imgUrl} alt="coffee" />
                <div className="best__item-title">
                    {coffeeName}
                </div>
                <div className="best__item-price">{price}</div>
            </div>)
    }

}
