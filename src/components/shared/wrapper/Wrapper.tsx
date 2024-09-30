import React from 'react';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className='
                mx-4
                max-w-screen-2xl 
                lg:mx-auto'>
            {children}
        </div>
    );
};

export default Wrapper;
