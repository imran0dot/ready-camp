import { Rating } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard: React.FC = () => {
    return (
        <div className='shadow-md'>

            <Link to={`/product/slug`} className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
                <div>
                    <img className="object-cover h-64 w-full" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Converse sneakers" />
                </div>

                <div className="flex flex-col gap-1 mt-4 px-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">Name view</h2>
                    <span className="font-normal text-gray-600 dark:text-gray-300">Category view</span>
                    <div className='flex justify-between'>
                        <span className="font-semibold text-gray-800 dark:text-gray-50">stock: 5</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-50">$60</span>
                    </div>
                </div>

                <div className="flex gap-4 mt-4 px-4">
                    <Rating value={5} readonly />
                </div>

                <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
                    <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                        <span className="text-base">Add to Cart</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;