import React from 'react';
import CartItem from '../../components/widgets/CartItem';

const Cart: React.FC = () => {
    return (
        <div>
            <body>
                <div className="min:h-screen bg-gray-100 pt-20">
                    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">

                            {/* cart item  */}
                            <CartItem 
                            image='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                            SKU='DKRD232'
                            price='300'
                            title='New Time Watch' />

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
                            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Cart;