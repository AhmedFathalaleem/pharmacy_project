import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import "../components/styles.css"
import RequestHistoryForm from './RequestHistoryForm';

function MedRequests(){

    const [Meds, setMedicine] = useState([]);

    useEffect(function (){
        getMedicine();
    }, []);

    const getMedicine = async () =>{
        try{
            const response = await axios.get('http://localhost:17088/RequestFalse');
            setMedicine(response.data);
        }catch(error){
            console.error("Error fetching meds", error);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedicine({ ...Meds, [name]: value });
      };

    

    const deleteMedicine = async (id) =>{
        try{
            await axios.delete('http://localhost:17088/Request/'+id);
            getMedicine();
        }catch (error){
            console.error('Error deleting medication', error);
        }
    };

    const approveMedicine = async (id) =>{
        try{
            await axios.put('http://localhost:17088/Request/'+id);
            getMedicine();
        }catch (error){
            console.error('Error deleting medication', error);
        }
    };

    return (
        <div className="medications-container">
    <h2 className="medications-heading">Medications requests</h2>
    <table className="medications-table">
        <thead>
            <tr>
                <th className="med-id">ID</th>
                <th className="med-name">Medicine ID</th>
                <th className="med-price">Category ID</th>
                <th className="med-action">Approve request</th>
                <th className="med-action">Delete reqeust</th>
            </tr>
        </thead>
        <tbody>
            {Meds.map((med) =>(
                <tr className="med-row" key={med.id}>
                    <td className="med-id">{med.id}</td>
                    <td className="med-name">{med.medicineId}</td>
                    <td className="med-price">{med.userId}</td>
                    <td className="med-action">
                        <button className="approve-button" onClick={()=>approveMedicine(med.id)}>Approve</button>
                    </td>
                    <td className="med-action">
                        <button className="delete-button" onClick={()=>deleteMedicine(med.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>




    
    <br />
    <br />
    <br />
    <h2>Requests history</h2>
    
    <RequestHistoryForm userId={Meds.length > 0 ? Meds[0].id : null} />

    

</div>

    )



}


export default MedRequests;