import React, { useState } from 'react'
import CoffeeCatalog from '../components/CoffeeCatalog'
import Footer from '../components/Footer'
import OurCoffeeBanner from '../components/OurCoffeeBanner'
import SearchButton from '../components/SearchButton'
import OurCoffeeSection from '../components/OurCoffeeSection'


export default function OurCoffee() {
    const [searchingWord, setSearchingWord] = useState("");
    const [selectedCountry, setSelectedCountry] = useState([]);
    return (
        <div>
            <OurCoffeeBanner></OurCoffeeBanner>
            <section class="shop">
                <div class="container">
                    <OurCoffeeSection></OurCoffeeSection>
                    <div className="line"></div>
                    <div className="filter__row">
                        <div className="col-lg-4 offset-2">
                            <form action="#" className="shop__search">
                                <label className="shop__search-label" for="filter">Looking for</label>
                                <input
                                    value={searchingWord}
                                    onChange={(e) => {
                                        setSearchingWord(e.target.value)
                                    }}
                                    id="filter"
                                    type="text"
                                    placeholder="start typing here..."
                                    className="shop__search-input"
                                />
                            </form>
                        </div>
                        <SearchButton
                            selectedCountry={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                        ></SearchButton>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <CoffeeCatalog
                                searchingWord={searchingWord}
                                selectedCountry={selectedCountry}
                            ></CoffeeCatalog>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
