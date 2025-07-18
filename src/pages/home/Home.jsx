import CategoryComponent from "../../components/categoryComponents/CategoryComponent";
import categories from '../../store/category'

const Home = () => {
    const categoryList = categories(store => store.categories)
    return (
        <div>
            <br />
            {
                categoryList.map(item => {
                    return <CategoryComponent key={item} limit={4} category={item} />
                })
            }
        </div>
    );
}

export default Home;
