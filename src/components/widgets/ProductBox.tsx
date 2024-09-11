import React from 'react';

type TProductData = {
    image: string,
    title: string,
    category?: string,
    price: string,
    offerPrice?: string
}

const ProductBox: React.FC<TProductData> = (
    {
        image,
        title,
        category,
        price,
        offerPrice
    }
) => {
    return (
        <div>
            <div>
                <img src={image} alt="product" />
            </div>
            <div>
                <h3>{title}</h3>
                <h5>{category}</h5>
                <p>
                    <span>{price}</span>
                    <span>{offerPrice}</span>
                </p>
            </div>
        </div>
    );
};

export default ProductBox;