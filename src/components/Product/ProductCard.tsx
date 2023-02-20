import React from 'react';
import { deleteProduct } from '../Product/ProductType'
import { useDispatch } from 'react-redux';
import ProductForm from '../Auth/ProductForm';
import { Route, useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number | string;
  description: string;
  productOwner: string;
  category: string;
  imageUrl: string;
}

const ProductCard = ({ product, editMode }: { product: Product, editMode: boolean }) => {
  const { name, price, description, productOwner, category, imageUrl } = product;

  let dispatch = useDispatch()
  const navigate = useNavigate();

  const handleOnEdit = () => {
    navigate('/pform', { state: { product } });
  }
  const handleOnDelete = () => {
    dispatch(deleteProduct(product.id))
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base h-13 mb-2">{description}</p>
        <p className="text-gray-700 text-base flex flex-row items-center">Price:<p className='bg-amber-100 text-black rounded-lg px-3 py-1'>$ {price}</p> </p>
        <p className="text-gray-700 text-base">Sold by: {productOwner}</p>
        <p className="text-gray-700 text-base">Category: {category}</p>
      </div>
      <div className="border-t-4 inset-x-0  bottom-0 h-17 px-6 py-4 flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={editMode ? handleOnEdit : () => { }}
        >
          {editMode ? "Edit" : "Add to Cart"}
        </button>
        {editMode ?
          (
            <button
              className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleOnDelete}
            >
              Delete product
            </button>
          ) : ""}

      </div>
    </div>
  );
};

export default ProductCard;
