import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.cart);
    const handleRemove = (productId: any) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product: any) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;