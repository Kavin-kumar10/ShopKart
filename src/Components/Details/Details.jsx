import React, { useContext, useEffect, useState } from "react";
import './Details.scss'
// import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import { ListContext } from "../../Context/ListContext";
import {TfiControlBackward} from 'react-icons/tfi'
import { Link } from "react-router-dom";
import Preloader from "../../Preloader";


const Details = () =>{
    const [datas,setData,catagory,setCatagory,catagories,id,setId,detail,setDetail] = useContext(ListContext);
    const [loading,setLoading] = useState(true);
    console.log(datas,setData,catagory,setCatagory,catagories,id,setId,setDetail);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },1000)
    },[]);
    return(
        <div>
        {
            loading?(<Preloader/>)
            :

            (<div className="Details">
            <div className="product">
                <div className="back">
                    <Link to="/">
                    <TfiControlBackward size={50}/>
                    </Link>

                </div>
                    <img src={detail.image} alt="img"/>
            </div>
            <div className="product-details">
                <div className="head">
                    <h1>{detail.title}</h1>
                    <h2>${detail.price} <del>$125</del></h2>
                </div>
                <div className="body">
                    <h3>{detail.description}</h3>
                    <h2>Quantity<input placeholder="0" type = "number" min={0} max={detail.rating.count}/></h2>
                </div>
                <div className="foot">
                    <button id="buy">Buy Now</button>
                    <button id="add"><AiOutlineHeart id="cart" size={30}/></button>
                </div>
            </div>
        </div>)
        }
        </div>
        )
        
}

export default Details