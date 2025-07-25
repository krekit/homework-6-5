import axios from 'axios'
import Card from '../card/Card'
import { useEffect, useState } from 'react';
import './CC.scss'

const CategoryComponent = ({category, limit}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setProducts([])
        setLoading(true)
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit${limit}`
            : `https://fakestoreapi.com/products/category/${category}/`
        ).then(({data}) => setProducts(data))
        .finally(() => {
            setLoading(false)
        })
    },[category, limit])

    if (loading) return <div className='kkk'><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    return (
        <div className='container'>
            <h2>{category}</h2>
            <div className="row">
                {
                    products.map(item => {
                        return <div className="col-3" key={item.id}>
                            <Card item={item} loading={loading}/>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default CategoryComponent;
