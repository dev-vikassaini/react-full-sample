import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { fetchProducts, PRODUCT_STATUS } from '../../store/productSlice';



export default function Products() {
    //TODO we can call direct api without thunk reducer
    // const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state: any) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
        //TODO we can call direct api without thunk reducer
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     setProducts(data);
        // };
        // fetchProducts();
    }, [dispatch]);

    const handleAdd = (product: any) => {
        dispatch(add(product));
    };

    if (status === PRODUCT_STATUS.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === PRODUCT_STATUS.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <div className="productsWrapper">
            {products.map((product: any) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={() => handleAdd(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}
