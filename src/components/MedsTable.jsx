import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

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
        <div>
            <h2>Medications</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Meds.map((med) =>(
                        <tr key={med.id}>
                            <td>{med.id}</td>
                            <td>{med.name}</td>
                            <td>{med.price}</td>
                            <td>{med.category}</td>
                            <td>
                                <button onClick={()=>deleteMedicine(med.id)}>Delete</button>
                            </td>
                            
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    )



}


export default MedsTable;