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
            const response = await axios.get('http://localhost:6001/patient/GetPatients');
            setPatient(response.data);
        }catch(error){
            console.error("Error fetching patients", error);
        }
    };

    const deletePatient = async (id) =>{
        try{
            await axios.delete('http://localhost:6001/patient/DeletePatient/'+id);
            getPatients();
        }catch (error){
            console.error('Error deleting patient', error);
        }
    };


    return (
        <div class="patients-container">
    <h2>Patients</h2>
    <table class="patients-table">
        <thead>
            <tr>
                <th class="patient-id">ID</th>
                <th class="patient-fname">First Name</th>
                <th class="patient-lname">Last Name</th>
                <th class="patient-action">Action</th>
            </tr>
        </thead>
        <tbody>
            {Patients.map((patient) =>(
                <tr class="patient-row" key={patient.id}>
                    <td class="patient-id">{patient.id}</td>
                    <td class="patient-fname">{patient.fName}</td>
                    <td class="patient-lname">{patient.lName}</td>
                    <td class="patient-action">
                        <button class="delete-button" onClick={()=>deletePatient(patient.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    )



}


export default PatientsTable;