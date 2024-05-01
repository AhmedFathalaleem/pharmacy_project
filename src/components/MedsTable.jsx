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
        <div class="medications-container">
    <h2 class="medications-heading">Medications</h2>
    <table class="medications-table">
        <thead>
            <tr>
                <th class="med-id">ID</th>
                <th class="med-name">Name</th>
                <th class="med-price">Price</th>
                <th class="med-category">Category</th>
                <th class="med-action">Action</th>
            </tr>
        </thead>
        <tbody>
            {Meds.map((med) =>(
                <tr class="med-row" key={med.id}>
                    <td class="med-id">{med.id}</td>
                    <td class="med-name">{med.name}</td>
                    <td class="med-price">{med.price}</td>
                    <td class="med-category">{med.category}</td>
                    <td class="med-action">
                        <button class="delete-button" onClick={()=>deleteMedicine(med.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    )



}


export default MedsTable;