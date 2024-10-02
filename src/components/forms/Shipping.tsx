import React from 'react';
import steadfast from "../../assets/steadfast.png";
import redx from "../../assets/redx.logo.png";

const Shipping: React.FC = () => {
    return (
        <div>
            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            <form className="mt-5 grid gap-6">

                {/* Steadfast  */}
                <div className="relative">
                    <input className="peer hidden" id="steadfast" type="radio" name="radio" checked />

                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>

                    <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="steadfast">
                        <img className="w-14 object-contain rounded-lg" src={steadfast} alt="" />
                        <div className="ml-5">
                            <span className="mt-2 font-semibold">Steadfast Delivery</span>
                            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                        </div>
                    </label>
                </div>


                {/* Redux   */}
                <div className="relative">
                    <input className="peer hidden" id="redx" type="radio" name="radio" />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="redx">
                        <img className="w-14 object-contain rounded-lg" src={redx} alt="" />
                        <div className="ml-5">
                            <span className="mt-2 font-semibold">Redx Delivery</span>
                            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                        </div>
                    </label>
                </div>



            </form>
        </div>
    );
};

export default Shipping;