import React, { ReactNode } from 'react';

interface HeadingPrimaryProps {
    children: ReactNode | string;
}

const HeadingPrimary: React.FC<HeadingPrimaryProps> = ({ children }) => {
    return (
        <h1 className='
            bg-primary
            text-white
            py-20
            flex
            flex-col
            justify-center
            text-5xl
            font-bold
            items-center'>
            {children}
        </h1>
    );
};

export default HeadingPrimary;
