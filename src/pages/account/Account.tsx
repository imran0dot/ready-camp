import React from 'react';
import { AccountSidebar } from '../../components/shared/accountSidebar/AccountSidebar';
import { Outlet } from 'react-router-dom';
import { UserView } from '../../components/widgets/UserView';

const Account: React.FC = () => {
    
    return (
        <div className='flex'>
            <AccountSidebar />
            <div className='p-4 w-full h-[400vh]'>
                <div className='flex justify-between items-center '>
                    <div>
                        <UserView />
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Account;