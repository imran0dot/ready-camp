import React from 'react';
import { Outlet } from 'react-router-dom';
import { AccountSidebar } from '../../../components/shared/accountSidebar/AccountSidebar';
import { UserView } from '../../../components/widgets/UserView';

const Account: React.FC = () => {

    return (
        <div className='flex'>
            <AccountSidebar />
            <div className='p-4 w-full'>
                <div className='flex justify-between items-center '>
                    <div>
                        <UserView />
                    </div>
                </div>

                <div className='m-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Account;