import { Link } from 'react-router-dom';
import categoryStore from '../../store/category';
import './header.scss'

const Header = () => {
    const categories = categoryStore(store => store.categories)
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
                </nav>
            </div>
        </header>
    );
}

export default Header;
