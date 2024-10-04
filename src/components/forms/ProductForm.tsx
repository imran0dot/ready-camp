import { Checkbox, Input, Typography } from '@material-tailwind/react';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DashboardSceneWrapper from '../layout/DashboardSceneWrapper';


interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

interface IProduct {
  title: string;
  slug: string;
  category: string;
  price: number;
  salePrice: number;
  stock: number;
  tags?: string[];
  brand: string;
  sku: string;
  dimensions: IDimensions;
  images?: string[];
}

const ProductForm: React.FC = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm<IProduct>();

  const onSubmit = (data: IProduct) => {
    console.log(data);
    // Handle form submission, e.g., send data to an API
  };

  return (
    <DashboardSceneWrapper>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit(onSubmit)}>
        {/* Title  */}
        <div>
          <Typography variant='h6' color='amber' className='mb-3'>Product Title</Typography>

          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: 'Product name is required' }}
            render={({ field }) => (
              <Input
                {...field}
                size='lg'
                className='rounded-sm'
                label="Product Title"
                error={!!errors.title}
                variant="outlined"
                {...register('title', { required: true })}
              />
            )}
          />
          {errors.title && <span className='text-right block text-red-500'>This field is required</span>}
        </div>





        {/* Price & Category  */}
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div>
              <Typography variant='h6' color='amber' className='mb-3'>Product Price</Typography>
              <div className='flex flex-col gap-3'>
                <div>
                  <Controller
                    name="price"
                    control={control}
                    defaultValue={0}
                    rules={{ required: 'Product price is required' }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="price"
                        type='number'
                        error={!!errors.price}
                        variant="outlined"
                        {...register('price', { required: true, min: 0 })}
                      />
                    )}
                  />
                  {errors.price && <span>This field is required</span>}
                </div>

                <div>
                  <Controller
                    name="salePrice"
                    control={control}
                    defaultValue={0}
                    rules={{ required: 'Product price is required' }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Sale Price"
                        type='number'
                        error={!!errors.salePrice}
                        variant="outlined"
                        {...register('salePrice', { required: true, min: 0 })}
                      />
                    )}
                  />
                  {errors.salePrice && <span>This field is required</span>}
                </div>

                <div>
                  <Controller
                    name="stock"
                    control={control}
                    defaultValue={0}
                    rules={{ required: 'stock is required' }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Stock"
                        type='number'
                        error={!!errors.stock}
                        variant="outlined"
                        {...register('stock', { required: true, min: 0 })}
                      />
                    )}
                  />
                  {errors.stock && <span>This field is required</span>}
                </div>
              </div>
            </div>

            <div>
              <Typography variant='h6' color='amber' className='mb-3'>Product Category</Typography>
              <div className="w-72">
                <Checkbox label="Category 1" />
                <Checkbox label="Category 1" />
                <Checkbox label="Category 1" />
                <Checkbox label="Category 1" />
                <Checkbox label="Category 1" />
              </div>
            </div>
          </div>

          <div>
            <label>Category:</label>
            <input {...register('category', { required: true })} />
            {errors.category && <span>This field is required</span>}
          </div>
        </div>





        <div>
          <label>Tags:</label>
          <input {...register('tags')} placeholder="Comma separated" />
        </div>


        <Controller
          name="brand"
          control={control}
          defaultValue=""
          rules={{ required: 'brand is required' }}
          render={({ field }) => (
            <Input
              {...field}
              label="Brand"
              error={!!errors.brand}
              variant="outlined"
              {...register('stock', { required: true })}
            />
          )}
        />
        {errors.brand && <span>This field is required</span>}


        <Controller
          name="sku"
          control={control}
          defaultValue=""
          rules={{ required: 'brand is required' }}
          render={({ field }) => (
            <Input
              {...field}
              label="sku"
              error={!!errors.sku}
              variant="outlined"
              {...register('sku', { required: true })}
            />
          )}
        />
        {errors.sku && <span>This field is required</span>}

        <div>
          <label>Dimensions:</label>
          <div>
            <label>Width:</label>
            <input type="number" {...register('dimensions.width', { required: true, min: 0 })} />
            {errors.dimensions?.width && <span>This field is required and must be a non-negative number</span>}
          </div>
          <div>
            <label>Height:</label>
            <input type="number" {...register('dimensions.height', { required: true, min: 0 })} />
            {errors.dimensions?.height && <span>This field is required and must be a non-negative number</span>}
          </div>
          <div>
            <label>Depth:</label>
            <input type="number" {...register('dimensions.depth', { required: true, min: 0 })} />
            {errors.dimensions?.depth && <span>This field is required and must be a non-negative number</span>}
          </div>
        </div>

        <div>
          <label>Images:</label>
          <input {...register('images')} placeholder="Comma separated" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </DashboardSceneWrapper>
  );
};

export default ProductForm;