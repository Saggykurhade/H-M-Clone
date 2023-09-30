import React from "react"
import Header from './Header'
import Footer from "./Footer"

function Mens() {

    return (
        <div id="men-bg">
            <Header />
            <div id="hm-com">
                <p className='head'>HM.com / <span>Men</span></p>
            </div>

            <div id="mens-container">
                <div className="sort-left">
                    <div className="sort-section">
                        <h4>Member Exclusive Prices</h4>
                        <div>Shop Now</div>
                    </div>

                    <div className="sort-section">
                        <h4>New Arrivals</h4>
                        <div>View All</div>
                        <div>Clothes</div>
                        <div>Shoes & Accessories</div>
                    </div>

                    <div className="sort-section">
                        <h4>Trending Now</h4>
                        <div>Trending Now</div>
                    </div>

                    <div className="sort-section">
                        <h4>Shop By Product</h4>
                        <div>View All</div>
                        <div>T-shirts & Tops</div>
                        <div>Shirts</div>
                        <div>Trousers</div>
                        <div>Shoes</div>
                        <div>Hoodies & Sweatshirts</div>
                        <div>Knitwear</div>
                        <div>Jeans</div>
                        <div>Basics</div>
                        <div>Shorts</div>
                        <div>Cardigans & Jumpers</div>
                        <div>Jackets & Coats</div>
                        <div>Suits & Blazers</div>
                        <div>Underwear & Innerwear</div>
                        <div>Swimwear</div>
                        <div>Socks</div>
                        <div>Accessories</div>
                        <div>Sportswear</div>
                        <div>Care products</div>
                        <div>Sleepwear & Loungewear</div>
                        <div>Premium Selection</div>
                        <div>Sale</div>
                    </div>

                    <div className="sort-section">
                        <h4>Premium Selection</h4>
                        <div>H&M Take Care</div>
                        <div>Learn More</div>
                    </div>
                </div>

                <div className="mens-content">
                    <div className="men-img"><img src="./Images/img-2.png" alt="" /></div>
                    <div className="men-img"><img src="./Images/img-3.png" alt="" /></div>
                    <div className="men-img"><img src="./Images/img-4.png" alt="" /></div>
                </div>
                
            </div>
            <Footer />
        </div >
    )
}

export default Mens