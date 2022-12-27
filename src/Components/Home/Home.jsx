import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import Carosel from './Carosel/Carosel'
import Items from './Items/Items'
import Sell from './Sell/Sell'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () =>{
    const [Item,setItem] = useState(true);
    return(
        <div className="Home">
            <SearchBar/>
            <Carosel Item = {Item} setItem = {setItem}/>
            {Item?<Items/>:<Sell/>}
        </div>
    )
}

export default Home