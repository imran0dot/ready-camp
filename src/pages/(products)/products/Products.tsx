import React from 'react';
import Wrapper from '../../../components/shared/wrapper/Wrapper';
import ProductCard from '../../../components/widgets/ProductCard';

const productsArray = new Array(16).fill(null);
const Products: React.FC = () => {
    return (
        <div>
            <Wrapper>
                <div className='grid grid-cols-4 gap-10 my-5'>
                    {
                        productsArray.map((product, index) => {
                            return (
                                <ProductCard key={index} />
                            )
                        })
                    }
                </div>
            </Wrapper>
        </div>
    );
};

export default Products;