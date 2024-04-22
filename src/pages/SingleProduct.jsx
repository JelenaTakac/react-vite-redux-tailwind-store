import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export const loader = async ({ params }) => {
    const response = await customFetch(`/products/${params.id}`);
    const product = response.data.data;
    return {product};
}

const SingleProduct = () => {
    const { product } = useLoaderData();
    const {image, title, price, description, colors, company} = product.attributes;
    const dollarsAmount = formatPrice(price);
    const [productColor, setProductColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();
    
    const cartProduct = {
        cartID: product.id + productColor,
        productID: product.id,
        image, 
        title,
        price,
        amount,
        productColor,
        company,
    }
    
    const addToCart = () => {
        dispatch(addItem({ product: cartProduct }));
    }

    const handleIncrementAmount = () => {
        setAmount(prevState => prevState + 1)
    }

    const handelDecrementAmount = () => {
        if (amount > 1) {
            setAmount(prevState => prevState - 1)
        }
    }


    return (
        <section>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li> 
                    <li>
                        <Link to={"/products"}>Products</Link>
                    </li> 
                </ul>
            </div>
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                <img
                src={image}
                alt={title}
                className="w-96 h-96 object-cover rounded-lg lg:w-full"/>
                <div>
                    <h1 className=" capitalize text-3xl font-bold">{title}</h1>
                    <h4 className=" text-xl text-neutral-content font-bold mt-2">{company}</h4>
                    <p className=" mt-3 text-xl">{dollarsAmount}</p>
                    <p className=" mt-6 leading-8">{description}</p>

                    <div className="mt-6">
                        <h4 className=" text-md font-medium tracking-wider capitalize">colors</h4>
                        <div className=" mt-2">
                            {colors.map(color => {
                                return (
                                    <button 
                                    key={color} 
                                    type="button" 
                                    className={`badge w-6 h-6 mr-2 ${color === productColor && " border-2 border-secondary"}`}
                                    style={{backgroundColor: color}}
                                    onClick={() => setProductColor(color)}></button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="w-full max-w-xs">
                            <label className=" label">
                                <h4 className="text-md font-medium tracking-wider capitalize">amount</h4>
                            </label>
                            <button className="btn btn-sm btn-circle btn-outline" onClick={handelDecrementAmount}>-</button>
                            <span className=" px-2 font-bold">{amount}</span>
                            <button className="btn btn-sm btn-circle btn-outline" onClick={handleIncrementAmount}>+</button>
                    </div>

                    <div className="mt-10">
                        <button className="btn btn-secondary btn-md uppercase" onClick={addToCart}>
                            Add to bag
                        </button>
                    </div>
                </div>
            </div>
        </section>
           
        
    )
}

export default SingleProduct