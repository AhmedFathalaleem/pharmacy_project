import CategoriesTable from "../components/CategoriesTable";
import AddCategoryForm from "../components/AddCategoryForm";
import UpdateCategoryForm from "../components/UpdateCategoryForm";
import "../components/styles.css";


function Categories(){
    return (

    
    <div>
        
        
        <CategoriesTable />
        <div className="update-and-add-container">
            <UpdateCategoryForm />
            <AddCategoryForm />
        </div>

        
    </div>
    );

    
    
}

export default Categories;