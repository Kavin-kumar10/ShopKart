import React from "react";
import "./Carousel.scss"

const Carosel = () =>{
    return(
        <div className="Carousel">
            <div className="Carousel__box-1">
                        <div className="contain">
                        <div>
                            <img src="https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png" alt="1"/>
                            </div>
                        <div>
                            <h2>Gadgets</h2>    
                            <h1><span>C</span><span>o</span><span>o</span><span>l</span></h1>
                        </div> 
                        </div>
            </div>
            <div className="Carousel__box-2">
                <div className="Select">
                    <h3>Buy</h3>
                </div>
                <div className="Select" >
                    <h3> Sell my products</h3>
                </div>
            </div>
        </div>
    )
}


export default Carosel