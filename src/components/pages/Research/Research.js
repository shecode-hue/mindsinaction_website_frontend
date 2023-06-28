import React from 'react';
import Searchbar from './Components/SearchBar';
import "./Research.css";
import MindsinactionData from './MindsinactionData.json';
import search from "../../images/research-images/search.png";


const Research = () => {
    return (
        <div>
            <div
                className="search-main"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95) 3%,rgba(17, 16, 16, 0.3) 30%),url(${search})`,
                    width: "100%",
                    height: "300px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // position: "relative",
                }}
            >
                <h1>Search anything here</h1>
            </div>
            <div className='Research'>
                <Searchbar placeholder="Search..." data={MindsinactionData} />
            </div>
        </div>
    );
}

export default Research;
