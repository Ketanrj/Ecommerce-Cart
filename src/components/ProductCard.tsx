import { type productType } from '../types/productType'
import { ShoppingCart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '../redux/cartSlice'
import { type Cartproduct } from '../redux/cartSlice'

type Props = {
  product: productType
}

function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const productDetails : Cartproduct = {
    id : product.id,
    title : product.title,
    thumbnail : product.thumbnail,
    price : product.price
  }

  const updateCart = (productDetails : Cartproduct) => {
    dispatch(AddtoCart({...productDetails}))
  }

  return (
    <div className={`flex flex-col h-72 border rounded-lg border-gray-200 p-2 justify-baseline hover:shadow-gray-100 hover:shadow-lg`}>
      <img className='w-full h-32 object-contain rounded-md mx-auto' src={product.thumbnail} alt={product.title} />
      <div className="mt-auto">
        <h2 className='font-medium mt-1'>{product.title}</h2>
        <p className='font-normal'>${product.price}</p>
      </div>
      <button onClick={() => updateCart(productDetails)} className={`flex mt-auto align-bottom gap-2 px-4 py-2 cursor-pointer hover:text-white ml-0 mr-auto justify-between bg-gray-50 border border-gray-200 hover:bg-gray-800 text-gray-800 text-sm rounded-md }`}><ShoppingCart size={16} />Add to Cart
      </button>
    </div>
  )
}



export default ProductCard