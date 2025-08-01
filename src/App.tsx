import ProductListPage from './pages/ProductListPage'
import SearchBar from './components/SearchBar'
import store from './redux/store';
import { Provider } from 'react-redux';
import Cart from './components/Cart';


function App() {

  return (
    <Provider store={store}>
      <div className="flex flex-row w-full justify-items-end">
        <SearchBar />
        <ProductListPage />
        <Cart />
      </div>
    </Provider>
  )
}

export default App
