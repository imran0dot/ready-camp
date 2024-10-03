import React from 'react';

const DashboardSceneWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    return (
        <div className='bg-white p-10 border'>
            {children}
        </div>
    );
};

export default DashboardSceneWrapper;