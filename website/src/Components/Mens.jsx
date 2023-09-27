import React from "react"
import Header  from './Header'
import Footer from "./Footer"
import './mens.css'

function Mens() {

    return(

        <div>
             <Header/>

             <div id="hm-com">
             <p className='head'>HM.com / <span>Men</span></p>
             </div>

            <div id='Screen'>

                <div id='left'>
                    <div id="div-1">
                    <h6>Member Exclusive Prices</h6>
                    <p>Shop Now</p>
                    </div>

                    <div id="div-2">
                    <h6>New Arrivals</h6>
                    <p>View All</p>
                    <p>Clothes</p>
                    <p>Shoes & Accesories</p>
                    </div>

                    <div id="div-3">
                    <h6>Trending Now</h6>
                    <p>Trending Now</p>
                    </div>

                    <div id="div-4">
                    <h6>Shop By Product</h6>
                    <p>View All</p>
                    <p>Shirts</p>
                    <p>Trousers</p>
                    <p>Shoes</p>
                    <p>Hoodies & Sweatshirts</p>
                    <p>Knitwear</p>
                    <p>Jeans</p>
                    <p>Basics</p>
                    <p>Shorts</p>
                    <p>Cardigans & Jumpers</p>
                    <p>Jackets & Coats</p>
                    <p>Suits & Blazers</p>
                    <p>Underwear & Innerwear</p>
                    <p>Swimwear</p>
                    <p>Socks</p>
                    <p>Accesories</p>
                    <p>Sportswear</p>
                    <p>Care Products</p>
                    <p>Sleepwear & Loungewear</p>
                    <p>Premium Selection</p>
                    <p>Sale</p>
                    </div>

                    <div id="div-5">
                    <h6>Sustainability</h6>
                    <p>H&M Take Care</p>
                    <p>Learn More</p>
                    </div>
                    
                </div>

                <div id='right'>
                    <div className='image1'>
                        <img src="" alt="" />
                    </div>
                    <div className='image2'>

                    </div>
                    <div className='image3'>

                    </div>
                    <div className='image4'>

                    </div>
                    <div className='image5'>

                    </div>
                
                    <h1>Men's Clothing</h1>
                    <p className='lastP'>
                    Check out all the freshest styles your closet needs in our men's 
                    clothing range. You'll find a roundup of everyday essentials, 
                    including tops and T-Shirts, as well as comfy lounge sets and 
                    underwear. Formal event coming up? Scroll no further than our men's 
                    blazers and suits for the sharpest looks and nail the dress code. When it comes to men's pants, there's chinos, joggers
                    </p>
                    <a className='lasta'><u>Read more</u></a>
                </div>
            </div>
             <Footer/>
        </div>
    )
}

export default Mens;