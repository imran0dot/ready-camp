import React from 'react';
import CartItem from '../../components/widgets/CartItem';
import HeadingPrimary from '../../components/widgets/HeadingPrimary';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { currentCartItems } from '../../redux/features/addToCart/addToCart.slice';
import { Button } from '@material-tailwind/react';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';

const Cart: React.FC = () => {
    const cartItems = useAppSelector(currentCartItems);

    if (cartItems.length) {
        return (
            <div className="min:h-screen bg-gray-100">

                <HeadingPrimary>Cart Items</HeadingPrimary>

                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mt-10">
                    <div className="rounded-lg md:w-2/3">
                        {
                            cartItems?.map((item, index) => <CartItem
                                key={index}
                                image='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                                SKU={item?.sku}
                                price={item?.price}
                                title={item?.name} />)
                        }
                        {/* cart item  */}


                    </div>

                    {/* <!-- Sub total --> */}
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">$129.99</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Shipping</p>
                            <p className="text-gray-700">$4.99</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <Link to={'/checkout'} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium block text-center text-blue-50 hover:bg-blue-600">Check out</Link>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='flex flex-col justify-center items-center gap-4  my-10'>
                <ShoppingCartIcon className='w-2/12 text-blue-700' />
                <h2 className='text-3xl font-bold'>Your Cart Is Empty</h2>
                <p>Add something to make me happy :)</p>
                <Button color='blue'>
                     <Link to={'/shop'}>
                        continue shopping
                     </Link>
                </Button>
            </div> 
        )
    }
};

export default Cart;