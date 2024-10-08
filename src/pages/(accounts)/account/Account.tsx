import React from 'react';
import { Outlet } from 'react-router-dom';
import { AccountSidebar } from '../../../components/shared/accountSidebar/AccountSidebar';
import { UserView } from '../../../components/widgets/UserView';

const Account: React.FC = () => {

    return (
        <div className='flex'>
                <AccountSidebar />
            <div className='w-full bg-[#F5F7FF]'>
                <div className='flex justify-between items-center '>
                    <UserView />
                </div>

                <div className='m-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Account;