import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearItems } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items)

    const handleClear = () => {
        dispatch(clearItems());
    }

    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClear}>Clear Cart</button>
            {
                cartItems.length === 0 ? <h1>Please your cart is empty, add items to the cart</h1> :  <ItemList items={cartItems}/>
            }
           
        </div>
        </div>
}

export default Cart