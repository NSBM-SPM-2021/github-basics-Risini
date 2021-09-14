import React, {useState} from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';
import Result from "../ResultPage/Result";
import "./Search.css";

function SearchBarHospital({ placeholder, data}) {
    const [filterData2, setFilterData2] = useState([]);
    const [clearData2, setClearData2] = useState("");
    
    const handleFilter = (event) => {
        const searchWord2 = event.target.value2
        setClearData2(searchWord2);
       
        const newFilter2 = data.filter((value2) =>{
            return value2.hospital.toLowerCase().includes(searchWord2.toLowerCase);
        })

        if (searchWord2 === ""){
            setFilterData2([]);
        }else{
            setFilterData2(newFilter2);
        }
    };

    const clearInput = () => {
        setFilterData2([]);
        setClearData2("");
    }

    return (
        <div className="Search">
            <div className="SearchInputs">
                <input type="text" name="hospital" placeholder={placeholder} value={clearData2} onChange={handleFilter} />
                <div className="searchIcon">
                    {filterData2.length === 0 ? ( <FaSearch/> ) : ( <FaTimes id="clearBtn" onClick={clearInput} /> )}                        
                </div>
            </div>(
                {filterData2.length!= 0 && (
                    <div className="dataResult" >
                    {filterData2.map((value2, key2) => {
                        return(
                            <a className="dataItem" href={Result} target="_blank">
                               <p>{value2.specialization}</p>   
                            </a>
                            )
                        })}
                    </div>
                    )}
                )
            </div>
    )
}
    
export default SearchBarHospital
          
            