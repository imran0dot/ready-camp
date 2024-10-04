import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface ICategoryCreateForm {
    name: string
}

const CategoryCreateForm: React.FC = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm<ICategoryCreateForm>();
    // TODO 
    const onSubmit = (data: ICategoryCreateForm) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Product name is required' }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            size='lg'
                            className='rounded-sm'
                            label="Product Title"
                            error={!!errors.name}
                            variant="outlined"
                            {...register('name', { required: true })}
                        />
                    )}
                />
                {errors.name && <span className='text-right block text-red-500'>This field is required</span>}
            </div>


            <div className='flex justify-end mt-5'>
                <Button variant='filled' color='blue' type="submit">Create Category </Button>
            </div>
        </form>
    );
};

export default CategoryCreateForm;