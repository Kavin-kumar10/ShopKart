import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ListContext = createContext();



export const ListProvider = (props) =>{


    //Catagories

    const catagories = ["electronics","women's clothing","jewelery","men's clothing"]

    const [catagory,setCatagory] = useState("");


    //Main data Fetching

    const [datas,setData]=useState()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((result)=>{
            setData(result.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


    //Details page

    const [id,setId] = useState(1)

    const [detail,setDetail] = useState({})
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((result)=>{
                setDetail(result.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    },[id])

    return(
        <div className="ListProvider">

            <ListContext.Provider value={[datas,setData,catagory,setCatagory,catagories,id,setId,detail,setDetail]}>
                {props.children}
            </ListContext.Provider>

        </div>
    )
}

export default ListProvider