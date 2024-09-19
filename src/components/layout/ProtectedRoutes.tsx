import React, { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useCurrentToken, useCurrentUser } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes: React.FC<{ children: ReactNode }> = ({ children }) => {
    const token = useAppSelector(useCurrentToken);
    const user = useAppSelector(useCurrentUser);
    if(!token){
        return <Navigate to="/" />
    }
    return children;
};

export default ProtectedRoutes;