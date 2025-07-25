import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cartStore from "../../store/cart";
import axios from "axios";
import './detail.scss'
import { ToastContainer, toast } from 'react-toastify';
import '../../components/categoryComponents/CC.scss'

const DetailPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({});
    const addCart = cartStore(s => s.addCart);
    const [loading, setLoading] = useState(false)

    const sub = () => {
        addCart(product)
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

    useEffect(() => {
        setLoading(true)
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data}) => setProduct(data))
        .finally(() => {
            setLoading(false)
        })
    }, [params.id])

    if (loading) return <div className='kkk'><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img className="product-img" src={product.image} alt="" />
                </div>
                <div className="col-6">
                    <h2 className="product-title">{product.title}</h2>
                    <br />
                    <p className="product-text">{product.description}</p>
                    <br />
                    <p className="product-text">{product.category}</p>
                    <p className="product-text">{product.price}</p>
                    <br />
                    <button onClick={sub}>buy</button>
                    <button onClick={() => {
                        navigate(-1)
                    }}>go back</button>
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
            </div>

        </div>
    );
}

export default DetailPage;
