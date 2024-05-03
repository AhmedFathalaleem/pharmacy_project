import MedsTable from "../components/MedsTable";
import UpdateMedicineForm from "../components/UpdateMedicineForm";
import AddMedicineForm from "../components/AddMedicineForm";




function Medicines(){
 
    return( 
    <div>
        
        
        <MedsTable />

        <div className="update-and-add-container">
            <UpdateMedicineForm />
            <AddMedicineForm />
        </div>

    </div>
    )
}

export default Medicines;