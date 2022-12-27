import React,{useState,useEffect} from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Home/Nav/Nav";
import Preloader from "./Preloader";

const Main = () =>{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000)
    },[]);
    return(
        <div>
            {
                loading?(<Preloader/>)
                :
                <div className="Main">
                <Nav/>
                <Home/>
                </div>
            }
        </div>

    )
}

export default Main