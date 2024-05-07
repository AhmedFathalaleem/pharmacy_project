import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import "../components/styles.css"

function MedsTable(){


    const [Meds, setMedicine] = useState([]);

    useEffect(function (){
        getMedicine();
    }, []);

    const [RequestData, setRequestData] = useState({
        MedicineId: '',
        UserId: ''
      });

    useEffect(function (){
        getMedicine();
    }, []);

    const getMedicine = async () =>{
        try{
            const response = await axios.get('http://localhost:17088/medicines');
            setMedicine(response.data);
        }catch(error){
            console.error("Error fetching meds", error);
        }
    };

   
    const requestMedicine = async (medicineId, categoryId) => {
        try{
            const requestData = { MedicineId: medicineId, UserId: categoryId };
            await axios.post('http://localhost:17088/Request', requestData);
            setRequestData({ ...RequestData, MedicineId: '', CategoryID: '' });
        } catch (error) {
            console.error('Error requesting medication', error);
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
                <th className="med-price">Category ID</th>
                <th className="med-category">Admin ID</th>
                <th className="med-action">Action</th>
            </tr>
        </thead>
        <tbody>
            {Meds.map((med) =>(
                <tr className="med-row" key={med.id}>
                    <td className="med-id">{med.id}</td>
                    <td className="med-name">{med.name}</td>
                    <td className="med-price">{med.categoryID}</td>
                    <td className="med-category">{med.adminId}</td>
                    <td className="med-action">
                        <button className="delete-button" onClick={()=>requestMedicine(med.id, med.categoryID)}>Request</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    )



}


export default MedsTable;