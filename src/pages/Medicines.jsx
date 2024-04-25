import MedsTable from "../components/MedsTable";
import UpdateMedicineForm from "../components/UpdateMedicineForm";
import AddMedicineForm from "../components/AddMedicineForm";




function Medicines(){
 
    return( 
    <div>
        
        <h1>Meds page</h1>
        <MedsTable />
        <UpdateMedicineForm />
        <AddMedicineForm />

    </div>
    )
}

export default Medicines;