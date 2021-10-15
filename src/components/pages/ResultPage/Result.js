import React, { useState, useEffect, Fragment } from "react";
import firebase from '../../../firebase';

function GetResult() {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const ref = firebase.firestore().collection("appointment");
    
    //GET FIREBASE DATA
    function getAppointments(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setAppointment(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getAppointments();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    //DELETE FUNCTION
    function deleteAppointment(appointment) {
        ref
        .doc(appointment.id)
        .delete()
        .catch((err) => {
            console.error(err);
        });
    }

    // EDIT FUNCTION
    function editAppointment(updatedAppointment) {
        setLoading();
        ref
        .doc(updatedAppointment.id)
        .update(updatedAppointment)
        .catch((err) => {
            console.error(err);
        });
    }

    return (
        <Fragment>
            {loading ? <h1>Loading...</h1> : null}
            {appointment.map((madeappointment) => (
            <div className="appointment" key={madeappointment.id}>
                <h1>Appointments</h1><hr/>
                <label>Patients Name : </label>
                <h2>{madeappointment.patientName}</h2>
                <label>Age : </label>
                <p>{madeappointment.patientAge}</p>
                <label>Gender : </label>
                <p>{madeappointment.gender}</p>
                <label>Date : </label>
                <p>{madeappointment.aptDate}</p>
                <label>Time : </label>
                <p>{madeappointment.aptTime}</p>
                <label>Problem : </label>
                <p>{madeappointment.aptNotes}</p>
                <div>
                    <button onClick={() => deleteAppointment(appointment)}>DELETE</button>
                    <button onClick={() =>editAppointment({ patientName: appointment.patientName, patientAge: appointment.patientAge, gender: appointment.gender, aptDate: appointment.aptDate, aptTime: appointment.aptTime, aptNotes: appointment.aptNotes, id: appointment.id })}>
                    EDIT
                    </button>
                </div>
            </div>
        ))}
         </Fragment>
    );
}

export default GetResult;
