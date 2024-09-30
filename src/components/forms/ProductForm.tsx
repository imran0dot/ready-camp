import { Button, Input, Select } from '@material-tailwind/react';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface ProductFormInputs {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: FileList | null;
}

const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen'];

const ProductForm: React.FC = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm<ProductFormInputs>();

  const onSubmit = (data: ProductFormInputs) => {
    console.log(data);
    // Handle form submission, e.g., send data to an API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: 'Product name is required' }}
        render={({ field }) => (
          <Input
            {...field}
            label="Product Name"
            error={!!errors.name}
            variant="outlined"
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        defaultValue=""
        rules={{ required: 'Description is required' }}
        render={({ field }) => (
          <Input
            {...field}
            label="Description"
            error={!!errors.description}
            variant="outlined"
          />
        )}
      />

      <Controller
        name="price"
        control={control}
        defaultValue={0}
        rules={{ required: 'Price is required', min: { value: 0.01, message: 'Price must be greater than 0' } }}
        render={({ field }) => (
          <Input
            {...field}
            label="Price"
            type="number"
            error={!!errors.price}
            variant="outlined"
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        defaultValue=""
        rules={{ required: 'Category is required' }}
        render={({ field }) => (
          <select
            {...field}
            onChange={(value) => field.onChange(value)} 
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />

      <Controller
        name="stock"
        control={control}
        defaultValue={0}
        rules={{ required: 'Stock quantity is required', min: { value: 0, message: 'Stock cannot be negative' } }}
        render={({ field }) => (
          <Input
            {...field}
            label="Stock Quantity"
            type="number"
            error={!!errors.stock}
            variant="outlined"
          />
        )}
      />

      <input
        {...register("image")}
        type="file"
        accept="image/*"
        className="mt-4"
      />

      <Button type="submit" color="blue">
        Submit
      </Button>
    </form>
  );
};

export default ProductForm;