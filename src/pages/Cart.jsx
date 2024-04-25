import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";


const Cart = () => {
    const user = useSelector(state => state.userState.user);
    const numItemsInCart = useSelector(state => state.cartState.numItemsInCart);
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    if (numItemsInCart === 0) {
        return <SectionTitle text="Your cart is empty" />
    }

    return (
        <>
            <SectionTitle text="Shopping Cart" />
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartItemsList />
                </div>
                <div className="lg:col-span-4 lg:pl-4">
                    <CartTotals />
                    {user ? (
                        <Link to={"/checkout"} className="btn btn-primary btn-block mt-">Proceed to checkout</Link>
                    ): (
                        <Link to={"/login"} className="btn btn-primary btn-block mt-">Please login</Link>
                    )}
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleClearCart}>Clear cart</button>
        </>
    )
}

export default Cart