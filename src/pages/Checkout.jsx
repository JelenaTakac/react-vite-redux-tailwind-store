import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";


const Checkout = () => {
    const cartTotal = useSelector(state => state.cartState.cartTotal);

  return (
    <div>
        {cartTotal === 0 ? (
            <SectionTitle text="Your cart is empty" />
        ) : (
            <>
                <SectionTitle text="Place your order" />
                <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                    <CheckoutForm />
                    <CartTotals />
                </div>
            </>
        )}
    </div>
  )
}

export default Checkout