import { useSelector } from "react-redux"
import { type RootState } from '../redux/store'
import { ShoppingCartIcon } from "lucide-react"
import CartProductCard from "./CartProductCard"

function Cart() {
    const cart = useSelector((state: RootState) => state.cart) 
    
    return (
        <div className="xl:w-[72rem] h-screen text-gray-800 bg-white">
            <section className="flex flex-col p-4">
                <div className="flex space-x-8 items-center justify-between">
                    <h3 className="text-lg font-medium">Your Cart</h3>
                    <div className="relative p-2 rounded-full bg-gray-200 border-gray-400 text-gray-800">
                        <div className="absolute rounded-full bg-gray-900 text-white px-2.5 py-1 -top-1 -left-4 shadow-lg shadow-gray-400 text-sm ">{cart.totalCartCount}</div>
                        <ShoppingCartIcon size={18} />
                    </div>
                </div>
                <div className="flex flex-col">
                    {cart.products.map((product) => (
                        <CartProductCard title={product.title} id={product.id} thumbnail={product.thumbnail} price={product.price} />
                    ))}
                </div>
                <h6 className="mt-8 items-start">Total Items in cart: {cart.totalCartCount}</h6>
            </section>
        </div>
    );
}

export default Cart