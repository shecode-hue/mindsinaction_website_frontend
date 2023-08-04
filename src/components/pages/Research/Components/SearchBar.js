import React, { useRef, useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const input = useRef(null);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }

    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                    ref={input}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 && wordEntered.length === 0 ? (
                        <FaSearch />
                    ) : (
                        <FaTimes id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                 
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            // <a className="dataItem dataLink" href={value.link} target="_blank">
                            //     <p>{value.title}</p>
                            // </a>

                            <NavLink className="dataItem dataLink" exact to={value.link}>
                                <p>{value.title}</p>
                            </NavLink>

                            

                        );

                    }

                    )}
                </div>
            )}

            {filteredData.length === 0 && wordEntered !== "" && (
                <p>No results found for {wordEntered}</p>
            )

            }
        </div>
    );
}

export default SearchBar;