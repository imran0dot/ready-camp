import React from 'react';

type TCategoryBox = {
    name: string,
    img: string
}

const CategoryBox: React.FC<TCategoryBox> = ({ img }) => {
    console.log(img)
    return (
        <div>
            <img
                className='w-96'
                src={img}
                alt="dfd" />
        </div>
    );
};

export default CategoryBox;