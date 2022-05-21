import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = () => {
    const location = useLocation();
    const [admin] = useAdmin();
    if (!admin) {
        return <Navigate to='/' replace ></Navigate >
    }
    return <Outlet />;
};

export default AdminRoute;