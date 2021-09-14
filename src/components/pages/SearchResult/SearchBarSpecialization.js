import React, {useState} from 'react'
// import { FaSearch, FaTimes } from 'react-icons/fa';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Result from "../ResultPage/Result";
import "./Search.css";


function SearchBarSpecialization({ placeholder, data}) {
    const [filterData3, setFilterData3] = useState([]);
    const [clearData3, setClearData3] = useState("");

    const handleFilter = (event) => {
        const searchWord3 = event.target.value3
        setClearData3(searchWord3);

        const newFilter3 = data.filter((value3) =>{
            return value3.specialization.toLowerCase().includes(searchWord3.toLowerCase);
        })

        if (searchWord3 === ""){
            setFilterData3([]);
        }else{
            setFilterData3(newFilter3);
        }
    };

    const clearInput = () => {
        setFilterData3([]);
        setClearData3("");
    }

    return(
        <div className="Search">
        <div className="SearchInputs">
            <input type="text" name="specialization" placeholder={placeholder} value={clearData3} onChange={handleFilter} />
            <div className="searchIcon">
                {filterData3.length === 0 ? ( <SearchIcon/> ) : ( <CloseIcon id="clearBtn" onClick={clearInput} /> )}                        
            </div>
        </div>(
            {filterData3.length!= 0 && (
                <div className="dataResult" >
                {filterData3.map((value3, key3) => {
                    return(
                        <a className="dataItem" href={Result} target="_blank">
                            <p>{value3.hospital}</p>
                        </a>
                        )
                    })}
                </div>
                )}
            )
        </div>
    )
}
    
export default SearchBarSpecialization