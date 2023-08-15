import React from 'react'
import CoffeeCatalogItem from './CoffeeCatalogItem';

export default function CoffeeCatalogWrapper({ coffeeCatalogList }) {
    return <div className="shop__wrapper">
        {coffeeCatalogList.map((item) => {
            return <CoffeeCatalogItem
                index={item.id}
                coffeeName={item.name}
                price={item.price}
                imgUrl={item.url}
                country={item.country}
                countryExist={true}
                description={item.description}
            ></CoffeeCatalogItem>
        })}
    </div>
}
