import React, {useState} from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';
import Result from "../ResultPage/Result";
import "./Search.css";


function SearchBarDoctorName({ placeholder, data}) {
    const [filterData1, setFilterData1] = useState([]);
    const [clearData1, setClearData1] = useState("");

    const handleFilter = (event) => {
        const searchWord1 = event.target.value1
        setClearData1(searchWord1);

        const newFilter1 = data.filter((value1) =>{
            return value1.doctorname.toLowerCase().includes(searchWord1.toLowerCase);
        })
        if (searchWord1 === ""){
            setFilterData1([]);
        }else{
            setFilterData1(newFilter1);
        }        
    };

    const clearInput = () => {
        setFilterData1([]);
        setClearData1("");
    }

    return (
        <div>
            <div className="Search">
                <div className="SearchInputs">
                    <input type="text" name="doctorname" placeholder={placeholder} value={clearData1} onChange={handleFilter} />
                    <div className="searchIcon">
                        {filterData1.length === 0 ? ( <FaSearch/> ) : ( <FaTimes id="clearBtn" onClick={clearInput} /> )}                        
                    </div>
                </div>(
                {filterData1.length!= 0 && (
                    <div className="dataResult">
                        {filterData1.map((value1, key1) => {
                            return(
                                <a className="dataItem" href={Result} target="_blank">
                                    <p>{value1.doctorname}</p>
                                </a>
                            )
                        })}
                    </div>
                    )}
                )
            </div>
            
        </div>      
    )
}

export default SearchBarDoctorName
