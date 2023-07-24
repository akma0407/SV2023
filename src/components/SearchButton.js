import React, { useEffect, useState } from 'react'
import SearchButtonItem from './SearchButtonItem';

export default function SearchButton() {
    const [countryData, setCountryData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);
    useEffect(() => {
        function getCountryData() {
            const countryList = ["Brazil", "Kenya", "Columbia"];
            console.log(countryList);
            setCountryData(countryList);
        }
        getCountryData();
        return () => setCountryData([]);
    }, []);
    return (
        <div className="col-lg-4">
            <div className="shop__filter">
                <div className="shop__filter-label">Or filter</div>
                <div className="shop__filter-group">
                    {countryData.map((item) => {
                        return (<SearchButtonItem
                            countryList={item}
                            selectedCountry={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                        ></SearchButtonItem>);
                    })}
                </div>
            </div>
        </div>

    )
}
