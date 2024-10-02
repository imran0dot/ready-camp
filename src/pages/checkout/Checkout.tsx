import React from 'react';
import Logo from '../../components/widgets/Logo';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Shipping from '../../components/forms/Shipping';
import CheckoutForm from '../../components/forms/CheckoutForm';

const Checkout: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <Logo className='w-40' />
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <CheckCircleIcon className='text-blue-800 w-10' />
                                <span className="font-semibold text-blue-800">Shop</span>
                            </li>
                            <ArrowRightIcon />
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">2</p>
                                <span className="font-semibold text-gray-900">Shipping</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">3</p>
                                <span className="font-semibold text-gray-500">Payment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                                <span className="float-right text-gray-400">42EU - 8.5US</span>
                                <p className="text-lg font-bold">$138.99</p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                                <span className="float-right text-gray-400">42EU - 8.5US</span>
                                <p className="mt-auto text-lg font-bold">$238.99</p>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Method  */}
                    <Shipping />
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 mb-7">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Complete your order by providing your payment details.</p>
                    {/* Checkout form  */}
                    <CheckoutForm /> 
                </div>
            </div>

        </div>
    );
};

export default Checkout;