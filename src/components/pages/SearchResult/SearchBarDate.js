import React, {useState} from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';
import Result from "../ResultPage/Result";
import "./Search.css";


function SearchBarDate({ placeholder, data}) {
    const [filterData4, setFilterData4] = useState([]);
    const [clearData4, setClearData4] = useState("");

    const handleFilter = (event) => {
        const searchWord4 = event.target.value4
        setClearData4(searchWord4);

        const newFilter4 = data.filter((value4) =>{
            return value4.date.toLowerCase().includes(searchWord4.toLowerCase);
        })
        if (searchWord4 === ""){
            setFilterData4([]);
        }else{
            setFilterData4(newFilter4);
        }
    };

    const clearInput = () => {
        setFilterData4([]);
        setClearData4("");
    }

    return(
        <div className="Search">
            <div className="SearchInputs">
                <input type="date" name="date" placeholder={placeholder} value={clearData4} onChange={handleFilter} />
                <div className="searchIcon">
                    {filterData4.length === 0 ? ( <FaSearch/> ) : ( <FaTimes id="clearBtn" onClick={clearInput} /> )}                        
                </div>
            </div>(
                {filterData4.length != 0 && (
                    <div className="dataResult" >
                    {filterData4.map((value4, key4) => {
                        return(
                            <a className="dataItem" href={Result} target="_blank">
                                <p>{value4.date}</p>
                            </a>
                            )
                        })}
                    </div>
                    )}
                )
        </div>
    );
}
    
export default SearchBarDate