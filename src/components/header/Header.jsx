import { Link } from 'react-router-dom';
import categoryStore from '../../store/category';
import cartStore from "../../store/cart";
import './header.scss'

const Header = () => {
    const categories = categoryStore(store => store.categories)
        const cartList = cartStore(state => state.cartList);
    const resultTotal = cartList.reduce((acc, item) => {
        return acc + item.count
    }, 0);
    return (
        <header className='header'>
            <div className="container header-container">
                <h2 className='header-logo'>
                    <Link to={'/'}>shop</Link>
                </h2>

                <nav className='header-nav'>
                    <Link to={'/'} className='logo'>Home</Link>
                    {
                        categories.map(item => <Link key={item} to={`/category/${item}`}>{item}</Link>)
                    }
                    <Link to={'/cart'} className='nav'>cart</Link>
                        <span style={{
                        padding: '10px',
                        background: 'lime',
                        borderRadius: '50%',
                        fontFamily: "'Courier New', Courier, monospace",
                        position: 'absolute',
                        marginLeft: '480px',
                        top: '4px'
                    }}>{resultTotal}</span>
                </nav>
            </div>
        </header>
    );
}

export default Header;
