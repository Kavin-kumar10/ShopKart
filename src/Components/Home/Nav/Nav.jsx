import React,{useContext} from "react";
import './Nav.scss'
import { ListContext } from "../../../Context/ListContext";
import {AiOutlineHome,AiOutlineAntDesign} from 'react-icons/ai'
import {BsGenderFemale,BsGenderMale} from 'react-icons/bs'
import {GiJewelCrown,GiElectric} from 'react-icons/gi'


const Nav = () =>{
    const  [datas,setData,catagory,setCatagory,catagories,id,setId] = useContext(ListContext);
    console.log(datas,setData,catagories,id,setId);
    return(
        <div className="Nav">
            <h2 style={{color:"white",padding:"25px",letterSpacing:"3px"}}>Shop Kart</h2>
            <div className="Nav__body">
                <p>Menu</p>
                <div className="line"></div>
                <div className="Nav__body__catagory">
                    <ul>
                        
                        {
                        (catagory === "")?
                        <li id="color1"><AiOutlineAntDesign size={50}/>All Catagories</li>
                        :<li onClick={()=>setCatagory("")}>All Catagories</li>    
                        }
                        {
                        (catagory === "women's clothing")?
                        <li id="color1"><AiOutlineAntDesign size={50}/>women's clothing</li>
                        :<li onClick={()=>setCatagory("women's clothing")}>women's clothing</li> 
                        }
                        {
                        (catagory === "men's clothing")?
                        <li id="color1"><AiOutlineAntDesign size={50}/>Men's clothing</li>
                        :<li onClick={()=>setCatagory("men's clothing")}>Men's clothing</li>    
                        }
                                                {
                        (catagory === "jewelery")?
                        <li id="color1"><AiOutlineAntDesign size={50}/>jewelery</li>
                        :<li onClick={()=>setCatagory("jewelery")}>jewelery</li>    
                        }
                        {
                        (catagory === "electronics")?
                        <li id="color1"><AiOutlineAntDesign size={50}/>Electronics</li>
                        :<li onClick={()=>setCatagory("electronics")}>Electronics</li>    
                        }
                    </ul>
                </div>
            </div>



            {/* media query for 1020px */}

            <div className="Nav__body-2">
                <h1>SK</h1>
                <div className="Nav__body-2__catagory">
                    <ul>
                        {
                        (catagory === "")?
                        <li id="color1"><AiOutlineHome/></li>
                        :
                        <li onClick={()=>setCatagory("")}><AiOutlineHome/></li>
                        }
                        {
                        (catagory === "women's clothing")?
                        <li id="color1"><BsGenderFemale/></li>
                        :
                        <li onClick={()=>setCatagory("women's clothing")}><BsGenderFemale/></li>
                        }
                        {
                        (catagory === "men's clothing")?
                        <li id="color1"><BsGenderMale/></li>
                        :
                        <li onClick={()=>setCatagory("men's clothing")}><BsGenderMale/></li>
                        }
                        {
                        (catagory === "jewelery")?
                        <li id="color1"><GiJewelCrown/></li>
                        :
                        <li onClick={()=>setCatagory("jewelery")}><GiJewelCrown/></li>
                        }
                        {
                        (catagory === "electronics")?
                        <li id="color1"><GiElectric/></li>
                        :
                        <li onClick={()=>setCatagory("electronics")}><GiElectric/></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav