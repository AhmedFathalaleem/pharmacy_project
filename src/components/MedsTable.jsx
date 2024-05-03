import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import "../components/styles.css"

function MedsTable(){

    const [Meds, setMedicine] = useState([]);

    useEffect(function (){
        getMedicine();
    }, []);

    const getMedicine = async () =>{
        try{
            const response = await axios.get('http://localhost:6001/meds/GetMedicine');
            setMedicine(response.data);
        }catch(error){
            console.error("Error fetching meds", error);
        }
    };

    //function to delete a medicine
    const deleteMedicine = async (id) =>{
        try{
            await axios.delete('http://localhost:6001/meds/DeleteMedicine/'+id);
            getMedicine();
        }catch (error){
            console.error('Error deleting medication', error);
        }
    };

    return (
        <div className="medications-container">
    <h2 className="medications-heading">Medications Control</h2>
    <table className="medications-table">
        <thead>
            <tr>
                <th className="med-id">ID</th>
                <th className="med-name">Name</th>
                <th className="med-price">Price</th>
                <th className="med-category">Category</th>
                <th className="med-action">Action</th>
            </tr>
        </thead>
        <tbody>
            {Meds.map((med) =>(
                <tr className="med-row" key={med.id}>
                    <td className="med-id">{med.id}</td>
                    <td className="med-name">{med.name}</td>
                    <td className="med-price">{med.price}</td>
                    <td className="med-category">{med.category}</td>
                    <td className="med-action">
                        <button className="delete-button" onClick={()=>deleteMedicine(med.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    )



}


export default MedsTable;