import { useState, type ChangeEvent } from "react"
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/productSlice";


//Sidebar
function SearchBar() {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(filterProducts(value))
        setKeyword(value);
    }

    return (
        <div className='xl:w-[72rem] ml-4 items-start text-gray-800'>
            <section className="p-4">
            <h3 className="text-lg font-medium">Search Products</h3>
                <div className="relative border w-full  border-gray-200 p-2 rounded-sm mt-2 shadow-xs">
                    <input type="text" placeholder="Search Eggs, Ice cream, Honey" className="outline-none w-full" value={keyword} onChange={handleChange} />
                </div>
            </section>
            <div className="flex flex-col py-2">
                  <h2 className="ml-4 text-sm text-gray-400">Submitted by <p className="text-shadow-black text-black">Ketan Jadhav</p> <a className="text-black" href='mailto:ketanrjadhav08@gmail.com'>ketanrjadhav08@gmail.com</a></h2>
            </div>

        </div>
    )
}

export default SearchBar