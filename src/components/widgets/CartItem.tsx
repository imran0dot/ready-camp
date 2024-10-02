import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAddToCart } from '../../redux/features/addToCart/addToCart.slice';
import { toast } from 'sonner';

type TCartItem = {
    image: string,
    title: string,
    price: string,
    SKU: string,
}

const CartItem: React.FC<TCartItem> = ({ image, title, price, SKU }) => {
    const dispatch = useDispatch();

    const handleRemoveAddToCart = (id: string) => {
        dispatch(removeAddToCart({id}));
        toast.warning('Successfully removed Items from your product');
    }
    return (
        <div
            className="
                justify-between 
                mb-6 rounded-lg 
                bg-white 
                p-6 
                shadow-md 
                sm:flex 
                sm:justify-start">
            <img
                src={image}
                alt="product-image"
                className="
                    w-full 
                    rounded-lg 
                    sm:w-40" />
            <div
                className="
                    sm:ml-4 
                    sm:flex 
                    sm:w-full 
                    sm:justify-between">
                <div
                    className="
                        mt-5 
                        sm:mt-0">
                    <h2
                        className="
                            text-lg 
                            font-bold 
                            text-gray-900">
                        {title}
                    </h2>
                    <p
                        className="
                            mt-1 
                            text-xs 
                            text-gray-700">
                        {SKU}
                    </p>
                </div>

                <div
                    className="
                        mt-4 
                        flex 
                        justify-center 
                        sm:space-y-6 
                        sm:mt-0 
                        sm:block 
                        sm:space-x-6">

                    {/* quantity management buttons  */}
                    <div
                        className="
                            flex 
                            items-center 
                            border-gray-100">

                        <span
                            className="
                                cursor-pointer 
                                rounded-l 
                                bg-gray-100 
                                py-1 
                                px-3.5 
                                duration-100 
                                hover:bg-blue-500 
                                hover:text-blue-50">  - </span>

                        <input
                            className="
                                h-8 
                                w-8 
                                border 
                                bg-white 
                                text-center 
                                text-xs 
                                outline-none"
                            type="number"
                            value="2"
                            min="1" />

                        <span
                            className="
                            cursor-pointer 
                            rounded-r 
                            bg-gray-100 
                            py-1 
                            px-3 
                            duration-100 
                            hover:bg-blue-500 
                            hover:text-blue-50"> + </span>
                    </div>

                    <div 
                    className="
                        flex 
                        items-center 
                        space-x-4 
                        ">
                        <p className="text-sm">{price} ৳</p>

                        <XMarkIcon 
                            onClick={() => handleRemoveAddToCart("12")}
                            className='w-10 rounded cursor-pointer border p-2' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartItem;