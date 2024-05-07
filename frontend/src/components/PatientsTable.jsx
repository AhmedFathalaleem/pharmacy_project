import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import "../components/styles.css";

function PatientsTable(){

    const [Patients, setPatient] = useState([]);

    useEffect(function (){
        getPatients();
    }, []);

    const getPatients = async () =>{
        try{
            const response = await axios.get('http://localhost:17088/Patient');
            setPatient(response.data);
        }catch(error){
            console.error("Error fetching patients", error);
        }
    };

    const deletePatient = async (id) =>{
        try{
            await axios.delete('http://localhost:17088/Patient/'+id);
            getPatients();
        }catch (error){
            console.error('Error deleting patient', error);
        }
    };


    return (
        <div className="patients-container">
            
    <table className="patients-table">
        <thead>
            <tr>
                <th className="patient-id">ID</th>
                <th className="patient-fname">First Name</th>
                <th className="patient-lname">User ID</th>
                <th className="patient-action">Action</th>
            </tr>
        </thead>
        <tbody>
            {Patients.map((patient) =>(
                <tr className="patient-row" key={patient.id}>
                    <td className="patient-id">{patient.id}</td>
                    <td className="patient-fname">{patient.name}</td>
                    <td className="patient-lname">{patient.userId}</td>
                    <td className="patient-action">
                        <button className="delete-button" onClick={()=>deletePatient(patient.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    )



}


export default PatientsTable;