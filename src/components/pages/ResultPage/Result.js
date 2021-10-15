import React, { useState, useEffect, Fragment } from "react";
import { getApps } from 'firebase/app';
import { getFirestore, collection, doc, getDocs } from "firebase/firestore"

function GetResult() {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const firebaseApp = getApps()[0];
    const db = getFirestore();
    console.log(db.app.options);
    
    //GET FIREBASE DATA
    // if (db.exists()) {
    //     console.log("Document data:", db.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    async function getAppointment() {
        setLoading(true);
        console.log("TEST")
        const querySnapshot = await getDocs(collection(db, "appointment"));
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
          console.log(querySnapshot.docs.length)
    }

    useEffect(() => {
        getAppointment();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    //DELETE FUNCTION
    async function deleteAppointment(appointment) {
        db
        .doc(appointment.id)
        .delete()
        .catch((err) => {
            console.error(err);
        });
    }

    // EDIT FUNCTION
    async function editAppointment(updatedAppointment) {
        setLoading();
        db
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
