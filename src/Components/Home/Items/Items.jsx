import React, { useContext } from "react";
import { ListContext } from "../../../Context/ListContext";
import './Items.scss'
import { Link } from "react-router-dom";

const Items = () =>{
    const  [datas,setData,catagory,setCatagory,catagories,id,setId] = useContext(ListContext);
    console.log(datas);
    console.log(setData,setCatagory,catagories,id,setId);
    return(
        <Link to="/details" style={{textDecoration:"none"}}>
        {
            (catagory === "")?
            <div className="Items-Main">
            <h1>All Catagories</h1>
            <div className="line"></div>
            <div className="Items">
            {
                datas?.map((data,index)=>{
                    return(
                    <div className="Items__Contain" key={index} onClick={()=>{setId(data.id)}}>
                        <div className="img-contain">
                        <img src={data.image} alt="img"/>
                        </div>
                        <div className="Items__Contain__details" >
                            <p>{data.title}</p>
                        </div>
                    </div>                        
                    )
                })
            }
            </div>
        </div>
            :
            <div className="Items-Main">
            <h1>{catagory}</h1>
            <div className="line"></div>
            <div className="Items">
            {
                datas?.filter(data=>data.category === catagory).map((data,index)=>{
                    return(
                    <div className="Items__Contain" key={index} onClick={()=>{setId(data.id)}}>
                        <div className="img-contain">
                        <img src={data.image} alt="img"/>
                        </div>
                        <div className="Items__Contain__details">
                            <p>{data.title}</p>
                        </div>
                    </div>                        
                    )
                })
            }
            </div>
        </div>
        }


        </Link>
    )
}

export default Items




