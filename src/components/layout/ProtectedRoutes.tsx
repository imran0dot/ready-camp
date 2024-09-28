import React, { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useCurrentUser } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes: React.FC<{ children: ReactNode }> = ({ children }) => {
    const user = useAppSelector(useCurrentUser);
    if(!user){
        return <Navigate to="/" />
    }
    return children;
};

export default ProtectedRoutes;