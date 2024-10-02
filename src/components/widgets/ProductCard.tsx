import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Rating } from '@material-tailwind/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { addToCart } from '../../redux/features/addToCart/addToCart.slice';

const ProductCard: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItems = {
            id: '12',
            sku: 'string',
            name: 'string',
            price: 'string',
            quantity: 1
        }
        dispatch(addToCart(cartItems));

        toast.success('Added item to cart')
    }

    const singlePageSlug = `/product/slug`
    return (
        <div className='shadow-md'>
            <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
                <Link to={singlePageSlug}>
                    <img className="object-cover h-64 w-full" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Converse sneakers" />
                </Link>

                <Link to={singlePageSlug} className="flex flex-col gap-1 mt-4 px-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">Name view</h2>
                    <span className="font-normal text-gray-600 dark:text-gray-300">Category view</span>
                    <div className='flex justify-between'>
                        <span className="font-semibold text-gray-800 dark:text-gray-50">stock: 5</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-50">$60</span>
                    </div>
                </Link>

                <div className="flex gap-4 mt-4 px-4">
                    <Rating value={5} readonly />
                </div>

                <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
                    <button
                        onClick={handleAddToCart}
                        className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                        <span className="text-base">Add to Cart</span>
                        <ShoppingCartIcon className='w-7' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;