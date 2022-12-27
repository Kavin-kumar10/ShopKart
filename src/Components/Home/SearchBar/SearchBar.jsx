import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import './SearchBar.scss'

const SearchBar = () =>{
    return(
        <div className="SearchBar">
            <div className="SearchBar__Search">
                <AiOutlineSearch size={30} id="search-icon" className="color1"/>
                <input type="text" placeholder="Search"/>
            </div>
            <div className="SearchBar__Detail">
                {/* <div className="Dropdown">
                    <div className="Dropdown__bar">
                            <p>Kavin_kumar@10</p>
                            <IoIosArrowDropdown className="color1" size={30}/>
                    </div>
                    <div className="Dropdown__select">
                        <ul>
                            <li>Profile</li>
                            <li>Offers</li>
                            <li>Cart</li>
                            <li>Orders</li>
                            <li>Log out</li>
                        </ul>
                    </div>
                </div> */}
                <img src="pic1.jpg" alt="pic"/>
            </div>
        </div>
    )
}

export default SearchBar