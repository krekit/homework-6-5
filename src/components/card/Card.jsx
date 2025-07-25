import {Link} from 'react-router-dom';
import cartStore from '../../store/cart';
import './card.scss';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Card = ({item, loading}) => {
    const addCart = cartStore(s => s.addCart);
    const sub = () => {
        addCart(item)
        toast.success('успешно добавлено в корзину', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }


    return (
        <div className='card'>
            <Link to={`/product/${item.id}`}>
                <img src={item.image} alt="" className='card-img'/>
                <h2 className='card-title'>{
                item.title.length > 30 
                ? item.title.substr(0, 27).trim() + '...' 
                : item.title
                }</h2>
                <p className='card-text'>{
                item.description.length > 30 
                ? item.description.substr(0, 27).trim() + '...' 
                : item.description
                }</p>
                <p className='card-text'>{item.category}</p>
                <p className='card-text'>${item.price}</p>
            </Link>
            <div className="card-block">
                <button onClick={sub} className="card-btn">buy</button>
                <button className="card-btn"><Link to={`/product/${item.id}`}>more</Link></button>

            </div>
                <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            
        </div>
    );
}

export default Card;
