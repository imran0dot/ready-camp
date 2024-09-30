import React from 'react';
import Wrapper from '../../../components/shared/wrapper/Wrapper';
import ProductCard from '../../../components/widgets/ProductCard';
import ProductFilterCard from '../../../components/widgets/ProductFilterCard';
import ProductShorting from '../../../components/widgets/ProductShorting';

const productsArray = new Array(16).fill(null);
const Products: React.FC = () => {
    return (
        <div className='my-10'>
            <Wrapper>

                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='w-full md:w-4/12'>
                        <ProductFilterCard />
                    </div>

                    <div className='w-full md:w-8/12 flex flex-col items-end'>
                        <ProductShorting />
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-3'>
                            {
                                productsArray.map((index) => {
                                    return (
                                        <ProductCard key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Products;