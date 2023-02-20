import React from 'react';
import Footer from '../Footer/Footer';
import { Product } from './ProductType';
import ProductCard from './ProductCard';
import HeaderBar from '../Header/HeaderBar';
import AppHeader from '../Header/AppHeader';
import { connect, ConnectedProps } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import rootReducer from '../../store/RootReducer/rootReducer';
import { setSearchTerm, setFilter } from '../../store/filters/filterAction';

interface Props extends PropsFromRedux { }
type RootState = ReturnType<typeof rootReducer>;
let editMode: boolean = false;

const ProductList: React.FC<Props> = ({ products, searchTerm, filter, setSearchTerm, setFilter }) => {
    const filteredProducts = products.products.filter((product: Product) => {
        const searchTermInName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const searchTermInDescription = product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const searchTermInProductOwner = product.productOwner.toLowerCase().includes(searchTerm.toLowerCase());

        if (filter === 'all') {
            return searchTermInName || searchTermInDescription || searchTermInProductOwner;
        } else {
            return product.category.toLowerCase().includes(filter.toLocaleLowerCase()) && (searchTermInName || searchTermInDescription || searchTermInProductOwner);
        }
    });

    let location = useLocation()
    let navigate = useNavigate();

    const retreivedData = location.state
    editMode = retreivedData ? true : false;

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };
    const handleOnCreateClick = () =>{
        navigate(`/pform`, {  replace: true   })
    }

    return (
        <div>
            <AppHeader title='Header' />
            <div className="mb-4 w-1/2 mx-auto">
                <HeaderBar />
            </div>
            <div className="mb-4 w-4/5 mx-auto py-6 flex flex-row items-center">
                <label htmlFor="filter" className="block text-gray-700 font-bold mb-2">
                    Filter by category
                </label>
                <div className="relative w-1/5 pl-3" >
                    <select
                        id="filter"
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        <option value="all">All categories</option>
                        <option value="Computer">Computer</option>
                        <option value="Phone">Phone</option>
                        <option value="Car">Car</option>
                        <option value="Drone">Drone</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M14.707 7.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 101.414-1.414L12.414 10l2.293-2.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <button className="mx-auto bg-lime-600 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
                 type="button"
                 onClick={handleOnCreateClick}
                 >Add Product</button>
            </div>

            {filteredProducts.length == 0 ? (
                <div className="w-100  rounded overflow-hidden">
                    <div className="mx-auto h-80 w-1/6 px-6 py-4 mt-5">
                        <h1>No such item available!!</h1>
                    </div>
                </div>
            )
                : (
                    <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filteredProducts.map((product: Product) => (
                            <ProductCard key={product.id} product={product} editMode={editMode} />
                        ))}
                    </div>
                )}
            <Footer />
        </div>

    );
};

const mapStateToProps = (state: RootState) => ({
    products: state.productReducer,
    searchTerm: state.filters.searchTerm,
    filter: state.filters.filter,
});

const connector = connect(mapStateToProps, { setSearchTerm, setFilter });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductList);
