import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

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
        <div>
            <h2>Patients</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>fName</th>
                        <th>lName</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Patients.map((patient) =>(
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.fName}</td>
                            <td>{patient.lName}</td>
                            <td>
                                <button onClick={()=>deletePatient(patient.id)}>Delete</button>
                            </td>
                            
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    )



}


export default PatientsTable;