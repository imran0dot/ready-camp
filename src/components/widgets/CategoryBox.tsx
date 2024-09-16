import React from 'react';

type TCategoryBox = {
    img: string
    link: string
}

const CategoryBox: React.FC<TCategoryBox> = ({ img, link }) => {
    return (
        <a href={link? link : "#"}>
            <img
                className='w-full'
                src={img}
                alt="dfd" />
        </a>
    );
};

export default CategoryBox;