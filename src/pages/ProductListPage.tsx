import { useEffect, useState } from 'react'
import { type productType } from '../types/productType'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { setallProducts } from '../redux/productSlice'
import { type RootState } from '../redux/store'
import { Loader } from 'lucide-react'

const fetchProducts = async (): Promise<productType[]> => {
    try {
        const res = await axios.get('https://dummyjson.com/products');
        const data = await res.data;
        if (data) {
            return data.products;
        }
    } catch (error) {
        console.error("Error fetching products", error);
    }
    return [];
}

type Props = {
}

function ProductListPage({ }: Props) {
    const [loading, setLoading] = useState(true);
    const filteredProducts = useSelector((state: RootState) => state.product.filteredProducts)
    const dispatch = useDispatch();

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            dispatch(setallProducts(data));
            setLoading(false);
        }
        loadProducts();
    }, [])

    console.log(filteredProducts);


    return (
        <section className="xl:w-[208rem] lg:w-[56rem] sm:w-[40rem] xs:w-[20rem] p-4 text-gray-800 border-l border-gray-200 border-r">
            <h3 className="text-lg mb-1 font-medium">Browse Products</h3>
            <h6 className='text-sm mb-2 font-normal'>Shop for your favourite products</h6>
                {loading ? (
                    <div className="m-auto align-middle justify-items-center"><Loader /></div>
                ) : (<div className="grid grid-cols-6 sm:grid-cols-2 xs:grid-col-0 md:grid-cols-4 gap-5"> 
                {filteredProducts.length > 1 ? filteredProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                )) : (
                    <p className='my-auto justify-center py-4 mt-8'>Product does not exist</p>
                )}
            </div>)}
        </section>
    )

}
export default ProductListPage

