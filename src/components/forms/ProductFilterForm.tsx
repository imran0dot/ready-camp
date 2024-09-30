import { Button } from '@material-tailwind/react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';


type FilterFormInputs = {
    category: string;
    maxPrice: number;
    brand: string;
    rating: string;
};

const ProductFilterForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FilterFormInputs>();

    const onSubmit: SubmitHandler<FilterFormInputs> = (data) => {
        console.log(data);
    };
    return (
        <div className=" p-4 rounded">
            <h2 className="text-lg font-bold mb-4">Filter Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block mb-1">Sport Category</label>
                    <select {...register('category')} className="w-full border rounded p-2">
                        <option value="">All</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Tennis">Tennis</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Price Range</label>
                    <input
                        type="number"
                        placeholder="Max Price"
                        {...register('maxPrice', { valueAsNumber: true })}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Brand</label>
                    <input
                        type="text"
                        placeholder="Brand Name"
                        {...register('brand')}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Rating</label>
                    <select {...register('rating')} className="w-full border rounded p-2">
                        <option value="">Any</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </div>
                <div>
                    <Button color='blue' size='md' type="submit" className="w-full text-white rounded">
                        Apply Filters
                    </Button>

                    <Button variant='outlined' color='blue' size='md' className="w-full mt-2 rounded">
                        Clear Filters
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ProductFilterForm;