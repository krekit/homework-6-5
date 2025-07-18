import {Link} from 'react-router-dom';
import './card.scss';

const Card = ({item}) => {
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
                <p className='card-text'>{item.price}</p>
            </Link>
            <div className="card-block">
                <button className="card-btn">buy</button>
                <button className="card-btn"><Link to={`/product/${item.id}`}>more</Link></button>
            </div>
        </div>
    );
}

export default Card;
