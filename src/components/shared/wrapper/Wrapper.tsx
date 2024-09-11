import React from 'react';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className='
                max-w-screen-2xl 
                border 
                mx-auto'>
            {children}
        </div>
    );
};

export default Wrapper;
