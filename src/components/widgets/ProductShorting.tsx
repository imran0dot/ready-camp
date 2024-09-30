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
            <div className="mb-4">
                <label className="block mb-1">Sport by</label>
                <select
                    {...register('short')} className="w-full border rounded p-2">
                    <option value="">All</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Soccer">Soccer</option>
                    <option value="Tennis">Tennis</option>
                </select>
            </div>
        </form>
    );
};

export default ProductShorting;