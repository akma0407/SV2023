import React from 'react'

export default function SearchButtonItem({ countryList, selectedCountry, setSelectedCountry }) {
    const indexCountry = selectedCountry.indexOf(countryList);
    function handleClick() {
        if (indexCountry === -1) {
            setSelectedCountry([...selectedCountry, countryList]);
        } else {
            setSelectedCountry([
                ...selectedCountry.slice(0, indexCountry),
                ...selectedCountry.slice(indexCountry + 1)
            ]);
        }
    }

    return (
        <div>
            <button
                className="shop__filter-btn"
                onClick={handleClick}
                style={(indexCountry === -1) ? { fontWeight: "normal" } : { fontWeight: "bold" }}
            >
                {countryList}
            </button>
        </div>
    );
}
