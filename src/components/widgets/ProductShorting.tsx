import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IShort {
    short: string
}
const ProductShorting: React.FC = () => {
    const { register, handleSubmit } = useForm<IShort>();

    const shortChange: SubmitHandler<IShort> = (data) => {
        console.log(data);
    }
    return (
        <form onChange={handleSubmit(shortChange)}>
            <div className="mb-4 flex justify-center items-center gap-3">
                {/* TODO  */}
                <label className="block mb-1 text-nowrap">Showing all 3 result</label>
                <select
                    {...register('short')} className="w-full border rounded p-2">
                    <option value="">Sort by popularity</option>
                    <option value="Basketball">Sort by latest</option>
                    <option value="Soccer">Sort by price: High to Low</option>
                    <option value="Tennis">Sort by price: Low to High</option>
                </select>
            </div>
        </form>
    );
};

export default ProductShorting;