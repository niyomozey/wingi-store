import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../Header/AppHeader";
import { Router, useNavigate, useLocation } from "react-router-dom";
import { addProduct, updateProduct, Product } from "../Product/ProductType";

interface Props {
    product?: Product;
}

const ProductForm: React.FC<Props> = ({ product }) => {
    let dispatch = useDispatch();
    let navigate = useNavigate()
    let location = useLocation()

    const retreivedData: any = location.state
    
    product = retreivedData ? retreivedData.product : null

    const [name, setName] = useState(product?.name ?? "");
    const [price, setPrice] = useState(product?.price ?? "");
    const [description, setDescription] = useState(product?.description ?? "");
    const [productOwner, setProductOwner] = useState(product?.productOwner ?? "");
    const [category, setCategory] = useState(product?.category ?? "");
    const [imageUrl, setImageUrl] = useState(product?.imageUrl ?? "");


    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleProductOwnerChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setProductOwner(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };

    const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newProduct: Product = {
            id: product?.id ?? new Date().getTime(),
            name,
            price,
            description,
            productOwner,
            category,
            imageUrl,
        };
        if (product) {
            dispatch(updateProduct(product.id, newProduct));
            navigate("/", {
                replace: true,
                state: {
                    user: newProduct
                }
            });

        } else {
            dispatch(addProduct(newProduct));
            navigate("/", { replace: true });
        }
    };

    return (
        <div>
            <AppHeader title='Header' isLogin={false} />
            <div className="inset-0 z-50 overflow-y-auto">                
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-white-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <form onSubmit={handleSubmit} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="w-full">
                                    <div className="mt-3 sm:mt-0 sm:ml-2 sm:text-left">
                                        <h3 className="text-xl leading-6 py-6 mx-auto text-center font-medium text-gray-900">{product ? 'Edit' : 'Add'} Product</h3>
                                        <div className="mt-2">
                                            <div className="mb-4">
                                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                                    Name:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={name}
                                                    onChange={handleNameChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
                                                <input
                                                    type="number"
                                                    id="price"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={price}
                                                    onChange={handlePriceChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
                                                <textarea
                                                    id="description"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={description}
                                                    onChange={handleDescriptionChange}
                                                ></textarea>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="productOwner" className="block text-gray-700 font-bold mb-2">Product Owner:</label>
                                                <input
                                                    type="text"
                                                    id="productOwner"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={productOwner}
                                                    onChange={handleProductOwnerChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category:</label>
                                                <input
                                                    type="text"
                                                    id="category"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={category}
                                                    onChange={handleCategoryChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">Image URL:</label>
                                                <input
                                                    type="text"
                                                    id="imageUrl"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={imageUrl}
                                                    onChange={handleImageUrlChange}
                                                />
                                            </div>
                                            <div className="w-full py-6 flex justify-center">
                                                <button type="submit"
                                                    className="mx-auto bg-lime-600 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
                                                >{product ? "Update" : "Create"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ProductForm;
