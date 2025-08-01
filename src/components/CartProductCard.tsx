import { Trash2Icon } from 'lucide-react';
import { type Cartproduct } from '../redux/cartSlice'
import { useDispatch } from 'react-redux';
import {DeletefromCart  } from '../redux/cartSlice'



type Props = {
    id: Cartproduct['id'];
    thumbnail: Cartproduct['thumbnail'];
    title: Cartproduct['title'];
    price: Cartproduct['price']
}

function CartProductCard({ id, thumbnail, title, price }: Props) {
    const dispatch = useDispatch()

    const handleDelete = (id : number | null) =>{
        dispatch(DeletefromCart(id));
    }

    return (
        <section className="flex flex-row border mt-2 bg-white border-gray-200 rounded-md py-2 justify-between px-2">
            <div className="w-16 h-8 bg-white rounded-lg mb-2"><img height={`100%`} width={`100%`} src={thumbnail} alt={title} /></div>
            <div className="flex flex-col p-2 mt-4 justify-between">
                <h4 className="font-medium text-sm text-gray-800">{title}</h4>
                <p className="font-medium text-lg text-gray-800">${price}</p>
            </div>
            <button onClick={() => handleDelete(id)} key={id} className='p-2 hover:bg-red-50  cursor-pointer w-fit bg-red-50'><Trash2Icon className='text-red-300 hover:text-red-600' size={16}></Trash2Icon></button>
        </section>
    )
}

export default CartProductCard