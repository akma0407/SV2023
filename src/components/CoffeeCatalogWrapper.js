import React from 'react'
import CoffeeCatalogItem from './CoffeeCatalogItem';

export default function CoffeeCatalogWrapper({ coffeeCatalogList }) {
    return <div className="best__item">
        {coffeeCatalogList.map((item) => {
            return <CoffeeCatalogItem
                coffeeName={item.name}
                price={item.price}
                imgUrl={item.url}
                country={item.country}
                countryExist={true}
            ></CoffeeCatalogItem>

        })}
    </div>

}
