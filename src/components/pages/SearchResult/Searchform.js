import React from 'react';
import { Button } from '../../Button';
import { FaHospitalAlt} from 'react-icons/fa';
import { GiMedicalPackAlt} from 'react-icons/gi';
import SearchBarDoctorName from './SearchBarDocName';
import SearchBarHospital from './SearchBarHospital';
import SearchBarSpecialization from './SearchBarSpecialization';
import SearchBarDate from './SearchBarDate';
import doctorname from "./Data.json";
import hospital from "./Data.json";
import specialization from "./Data.json";
import date from "./Data.json";
import { Link } from 'react-router-dom';
import "./SearchBar.css"



function Searchform() {
    return (
        <div className="Searchform">
            <div className="screenleft">
                <Link className='search__container-card'>
                <div className="image">
                    <img src="images/Doc3.svg"/>
                </div>
            </Link>
            </div>
            <div className="screenright">
                <div><SearchBarDoctorName placeholder="Enter Doctor name..." data={doctorname} /></div>
                <div><FaHospitalAlt/><SearchBarHospital placeholder="Enter Hospital name..." data={hospital} /></div>
                <div><GiMedicalPackAlt/><SearchBarSpecialization placeholder="Enter Specialization..." data={specialization} /></div>   
                <div><SearchBarDate placeholder="Enter date..." data={date} /></div>   
                    <Button buttonSize='btn--wide' buttonColor='blue'>
                    Search
                    </Button>
            </div>
        </div>
    )
}

export default Searchform
