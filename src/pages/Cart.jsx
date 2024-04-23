import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <h1>Cart</h1>
            <button className="btn btn-primary" onClick={handleClearCart}>Clear cart</button>
        </div>
    )
}

export default Cart