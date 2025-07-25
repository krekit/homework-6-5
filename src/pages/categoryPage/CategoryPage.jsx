import { useParams } from "react-router-dom";
import CategoryComponent from "../../components/categoryComponents/CategoryComponent";


const CategoryPage = () => {
    const params = useParams();
    return (
        <div>
            <CategoryComponent category={params.category} limit={0} />
        </div>
    );
}

export default CategoryPage;
